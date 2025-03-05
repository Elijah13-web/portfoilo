import React, { useState, useEffect, useRef } from 'react';
import Wrapper from '../components/Wrapper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import phone from "../assets/icons/icomoon-free_mobile.png";
import branding from "../assets/icons/tag 1.png";
import ui from "../assets/icons/carbon_ibm-engineering-test-mgmt.png";
import webflow from "../assets/icons/feather-pen 1.png";

const useIntersection = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, options);

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return [elementRef, isVisible];
};

const Skill = () => {
  const [ref, inView] = useIntersection({ threshold: 0.1 });
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isCounting, setIsCounting] = useState(false);

  const skills = [
    { icon: phone, label: "Responsive Design", percentage: 88 },
    { icon: branding, label: "Front-End Frameworks", percentage: 85 },
    { icon: ui, label: "Testing and Debugging", percentage: 75 },
    { icon: webflow, label: "Cloud Services", percentage: 50 },
  ];

  const startCounting = () => {
    setCounts([0, 0, 0, 0]);
    setIsCounting(true);
  };

  useEffect(() => {
    if (isCounting) {
      const targetCounts = skills.map(skill => skill.percentage);
      const increments = targetCounts.map(percentage => Math.ceil(percentage / 50));

      const interval = setInterval(() => {
        setCounts(prevCounts =>
          prevCounts.map((count, index) => {
            if (count >= targetCounts[index]) return targetCounts[index];
            return Math.min(count + increments[index], targetCounts[index]);
          })
        );
      }, 40);

      return () => clearInterval(interval);
    }
  }, [isCounting, skills]);

  useEffect(() => {
    if (inView) {
      startCounting();
    }
  }, [inView]);

  return (
    <Wrapper>
      <section id="skills" ref={ref} onClick={startCounting}>
        <div className="py-10">
          <div className="text-center lg:text-start">
            <h2 className="my-3">My Skills</h2>
            <h1 className="font-bold text-2xl">My Expertise</h1>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1} // Default for mobile
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="mt-5"
          >
            {skills.map((skill, index) => (
              <SwiperSlide key={index}>
                <div className="border bg-[#F5FCFF] rounded-xl p-5 w-full h-56 text-center lg:text-start">
                  <img
                    src={skill.icon}
                    alt={skill.label}
                    className="border bg-slate-50 rounded-2xl py-2 p-1 h-16 mx-auto lg:mx-0"
                  />
                  <h1 className="text-xl 2xl:text-xl font-bold">{skill.label}</h1>
                  <p className="font-bold text-2xl">{counts[index]}%</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Wrapper>
  );
};

export default Skill;
