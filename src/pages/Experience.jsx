// import react vertical timeline component
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

// react icon
import { RiNextjsFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";

// import Navbar 
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

function Experience() {
  return (
  //  fragment
   <> 
   <Navbar />
      <div className="wrapper"> 
          <h1>Experience</h1>
          <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2024 - present"
                iconStyle={{ background: '#222831', color: '#fff' }}
                icon={<RiNextjsFill />}
              >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023 - present"
                iconStyle={{ background: '#222831', color: '#fff' }}
                icon={<FaReact />}
              >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2023 - present"
                iconStyle={{ background: '#222831', color: '#fff' }}
                icon={<FaVuejs />}
              >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2022 - present"
                iconStyle={{ background: '#222831', color: '#fff' }}
                icon={<FaLaravel />}
              >
              <h3 className="vertical-timeline-element-title">Art Director</h3>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
   </>
  )
}

export default Experience
