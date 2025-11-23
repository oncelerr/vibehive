import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Spinner from '../../components/Spinner';
import { gsap } from 'gsap';
import styles from './Login.module.scss';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    agreeToTerms: false
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Refs for GSAP animations
  const loginContRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Preload images
  useEffect(() => {
    const imageUrls = [
      '/Assets/loginbgelemnts.png',
      '/Assets/gradient.png',
      '/Assets/2gradient.png',
      '/Assets/zigzag.svg',
      '/Assets/triangle.svg',
      '/Assets/circle.svg',
      '/Assets/plus.svg'
    ];

    const preloadImages = async () => {
      const imagePromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });

      try {
        await Promise.all(imagePromises);
        // Add a small delay to ensure smooth transition
        setTimeout(() => {
          setImagesLoaded(true);
        }, 500);
      } catch (error) {
        console.error('Error preloading images:', error);
        // Still show the page even if some images fail to load
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  // GSAP animations when images are loaded
  useEffect(() => {
    if (imagesLoaded) {
      const tl = gsap.timeline();
      
      // Set initial states
      gsap.set(loginContRef.current, { scale: 0.8, opacity: 0, y: 50 });
      gsap.set(titleRef.current, { opacity: 0, y: -30 });
      gsap.set(formRef.current.children, { opacity: 0, y: 20, stagger: 0.1 });

      // Animate login container
      tl.to(loginContRef.current, {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 1.5 // Wait for background elements to finish exploding
      })
      // Animate title
      .to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.4")
      // Animate form elements
      .to(formRef.current.children, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      }, "-=0.2");
    }
  }, [imagesLoaded]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!formData.agreeToTerms) {
      setError('terms');
      return;
    }

    setLoading(true);

    const result = await login(formData.email, formData.password);

    if (result.success) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    } else {
      setError('credentials');
      // Clear the form inputs
      setFormData(prev => ({
        ...prev,
        email: '',
        password: ''
      }));
    }

    setLoading(false);
  };

  // Show spinner while images are loading
  if (!imagesLoaded) {
    return <Spinner />;
  }

  return (
    <>
      <div className={styles.homeWrp}>
        <div className={styles.container}>
          <div className={styles.backgroundElement}>
            <img src="/Assets/gradient.png" alt="" />
          </div>
          <div className={styles.backgroundElement2}>
            <img src="/Assets/2gradient.png" alt="" />
          </div>
          <div className={styles.backgroundElement3}>
            <img src="/Assets/zigzag.svg" alt="" />
          </div>
          <div className={styles.backgroundElement4}>
            <img src="/Assets/triangle.svg" alt="" />
          </div>
          <div className={styles.backgroundElement5}>
            <img src="/Assets/circle.svg" alt="" />
          </div>
          <div className={styles.backgroundElement6}>
            <img src="/Assets/plus.svg" alt="" />
          </div>

          <div className={styles.loginCont} ref={loginContRef}>
            <div className={styles.loginCont1}>
              <h6 className={styles.h6} ref={titleRef}>Hive <span>Core</span></h6>
              <form onSubmit={handleSubmit} ref={formRef}>
                <p>Email Address*</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder={error === 'credentials' ? 'Invalid email or password - Please retype' : 'Your Email Address'}
                  value={formData.email}
                  onChange={handleInputChange}
                  className={error === 'credentials' ? styles.errorInput : ''}
                  required
                />

                <p>Password*</p>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder={error === 'credentials' ? 'Invalid email or password - Please retype' : 'Input your password'}
                  value={formData.password}
                  onChange={handleInputChange}
                  className={error === 'credentials' ? styles.errorInput : ''}
                  required
                />

                <button type="submit" disabled={loading}>
                  {loading ? 'Logging in...' : 'Login'}
                </button>

                <div className={styles.checkboxContainer}>
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    id="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className={error === 'terms' ? styles.errorCheckbox : ''}
                  />
                  <p className={error === 'terms' ? styles.errorText : ''}>
                    {error === 'terms' ? 'Please agree to the Terms of Service to continue' : 'I agree to the Terms of Service.'}
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
