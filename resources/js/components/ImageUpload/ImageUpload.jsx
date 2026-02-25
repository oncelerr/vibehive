import React, { useState, useRef } from 'react';
import styles from './ImageUpload.module.scss';

const ImageUpload = ({ 
  title = "Banner Image", 
  subtitle = "Add your documents here, and you can upload up to 5 files max",
  maxFiles = 5,
  maxSizeMB = 10,
  onFilesChange 
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFile = (file) => {
    // Check if file is an image
    if (!file.type.startsWith('image/')) {
      return 'Only image files are allowed';
    }
    
    // Check file size (convert MB to bytes)
    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return `File size must be less than ${maxSizeMB}MB`;
    }
    
    return null;
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    
    // Check max files limit
    if (uploadedFiles.length + fileArray.length > maxFiles) {
      setError(`You can only upload up to ${maxFiles} files`);
      return;
    }

    const validFiles = [];
    let hasError = false;

    fileArray.forEach(file => {
      const validationError = validateFile(file);
      if (validationError) {
        setError(validationError);
        hasError = true;
        return;
      }
      validFiles.push(file);
    });

    if (!hasError && validFiles.length > 0) {
      setError('');
      const newFiles = [...uploadedFiles, ...validFiles];
      setUploadedFiles(newFiles);
      
      if (onFilesChange) {
        onFilesChange(newFiles);
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const removeFile = (index) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    if (onFilesChange) {
      onFilesChange(newFiles);
    }
  };

  return (
    <div className={styles.imageUpload}>
      {title && <p className={styles.title}>{title}</p>}
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      
      <div
        className={`${styles.uploadArea} ${dragActive ? styles.dragActive : ''}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={handleChange}
          className={styles.fileInput}
        />
        
        <div className={styles.uploadContent}>
          <div className={styles.cloudIcon}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M38 20C37.2 12.6 31 7 23.5 7C18.1 7 13.4 10.2 11.4 15C5.4 15.6 1 20.9 1 27C1 33.6 6.4 39 13 39H37C42 39 46 35 46 30C46 25.4 42.6 21.6 38 20ZM28 23V31H19V23H14L23.5 13.5L33 23H28Z" fill="#9CA3AF"/>
            </svg>
          </div>
          <p className={styles.uploadText}>
            <span className={styles.dragText}>Drag your file(s) or </span>
            <span className={styles.browseText}>browse</span>
          </p>
          <p className={styles.limitText}>Max {maxSizeMB} MB files are allowed</p>
        </div>
      </div>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className={styles.fileList}>
          {uploadedFiles.map((file, index) => (
            <div key={index} className={styles.fileItem}>
              <span className={styles.fileName}>{file.name}</span>
              <span className={styles.fileSize}>
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </span>
              <button 
                className={styles.removeBtn}
                onClick={(e) => {
                  e.stopPropagation();
                  removeFile(index);
                }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
