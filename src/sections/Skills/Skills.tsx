import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Skills.scss';
import StateMarker from '../../components/StateMarker'

interface Skill {
  name: string;
  level: number;
  desc?: string;
}

const skillData: Record<string, Skill[]> = {
  frontend: [
    { name: "Vue", level: 95, desc: "主力強項，具備深厚的架構與組件開發經驗。" },
    { name: "React", level: 60, desc: "目前網站開發所使用的框架，展示技術靈活性。" },
    { name: "JavaScript", level: 90, desc: undefined },
    { name: "jQuery", level: 90, desc: undefined },
    { name: "CSS / SCSS / SASS", level: 85, desc: undefined }
  ],
  backend: [
    { name: "Node.js", level: 50, desc: undefined },
    { name: "PHP", level: 50, desc: undefined },
    { name: "Python", level: 60, desc: undefined }
  ],
  tools: [
    { name: "Electron", level: 70, desc: "跨平台桌面端開發工具。" },
    { name: "Vite / Webpack", level: 80, desc: undefined },
    { name: "Git", level: 90, desc: undefined }
  ]
};

const Skills: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>('frontend');
  const containerRef = useRef<HTMLDivElement>(null);
  const [animDone, setAnimDone] = useState(false);
  const lastIsMobile = useRef(window.innerWidth <= 768);

  useEffect(() => {
    if (!containerRef.current) return;
    const updatePanels = (forceAnim = false) => {
      const isMobile = window.innerWidth <= 768;
      const isBreakpointSwitched = isMobile !== lastIsMobile.current;

      if (forceAnim || isBreakpointSwitched) {
        const panels = containerRef.current?.querySelectorAll('.skill-panel');

        panels?.forEach((panel) => {
          const id = panel.getAttribute('data-id');
          const isActive = id === activeCat;
          const content = panel.querySelector('.panel-content');
          const progressFills = panel.querySelectorAll('.progress-fill');

          gsap.killTweensOf([panel, content, progressFills]);

          const tl = gsap.timeline({
            defaults: { ease: "expo.out" },
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
            onComplete: () => {
              if (isActive) {
                setAnimDone(true);
                gsap.set(panel, { clearProps: "all" });
              }
            }
          });

          if (isActive) {
            tl.to(panel, {
              flexGrow: isMobile ? 0 : 12,
              flexBasis: isMobile ? "auto" : "0%",
              duration: 0.8,
            })
              .to(content, {
                opacity: 1, x: 0, y: 0,
                duration: 0.5,
              }, "-=0.4");

            if (forceAnim) {
              tl.fromTo(progressFills,
                { scaleX: 0 },
                { scaleX: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
                "-=0.3"
              );
            }
          } else {
            tl.to(content, {
              opacity: 0,
              x: isMobile ? 0 : -20,
              y: isMobile ? -20 : 0,
              duration: 0.3,
            })
              .to(panel, {
                flexGrow: 0,
                flexBasis: isMobile ? "60px" : "80px",
                width: isMobile ? "100%" : "80px",
                duration: 0.6,
              }, "<");
          }
        });
      }

      lastIsMobile.current = isMobile;
    };

    updatePanels(true);

    const handleResize = () => {
      updatePanels(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeCat]);

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      {Object.entries(skillData).map(([key, skills], index) => (
        <div
          key={key}
          className={`skill-panel ${activeCat === key ? 'active' : ''}`}
          data-id={key}
          onClick={() => setActiveCat(key)}
        >
          <div className="panel-label">
            <span className="num">0{index + 1}</span>
            <h2 className="title">{key.toUpperCase()}</h2>
          </div>

          <div className="panel-content">
            {skills.map((skill, i) => (
              <div key={i} className="skill-item">
                <div className="skill-info">
                  <span className="name">{skill.name}</span>
                  <span className="percent">{skill.level}%</span>
                </div>
                <div className="progress-track">
                  <div
                    className="progress-fill"
                    style={{ width: `${skill.level}%`, transformOrigin: 'left' }}
                  ></div>
                </div>
                {skill.desc && <p className="desc">{skill.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      ))}
      <StateMarker key="about-marker" isParentAnimDone={animDone} statusText="UPDATE_STEP_003" />
    </section>
  );
};

export default Skills;