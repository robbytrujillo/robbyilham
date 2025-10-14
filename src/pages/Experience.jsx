// import react vertical timeline component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// react icon
// import { RiNextjsFill } from "react-icons/ri";
import { FaPhp, FaReact } from "react-icons/fa";
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
            date="2025 - present"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaPhp />}
          >
            <h3 className="vertical-timeline-element-title">Chatbot AI</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bogor, Indonesia
            </h4>
            <p>Web Development Chatbot AI</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaLaravel />}
          >
            <h3 className="vertical-timeline-element-title">
              Website Cari Hotel
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bogor, Indonesia
            </h4>
            <p>Web Development Cari Hotel</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Website Desa Digital
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bogor, Indonesia
            </h4>
            <p>Web Development Desa Digital</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaPhp />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Development IHBS
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              East Jakarta, Indonesia
            </h4>
            <p>Web Development Certificate IHBS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2025 - present"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaPhp />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Development IHBS
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              East Jakarta, Indonesia
            </h4>
            <p>Web Development Inventory IHBS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaPhp />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Development IHBS
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              East Jakarta, Indonesia
            </h4>
            <p>Web Development Health IHBS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2024 - 2025"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaReact />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Development IHBS
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              East Jakarta, Indonesia
            </h4>
            <p>Web Development Homecoming IHBS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - 2024"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaLaravel />}
          >
            <h3 className="vertical-timeline-element-title">
              Web Development IHBS
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              East Jakarta, Indonesia
            </h4>
            <p>Web Development HRIS IHBS</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - 2023"
            iconStyle={{ background: "#222831", color: "#fff" }}
            icon={<FaVuejs />}
          >
            <h3 className="vertical-timeline-element-title">Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bogor, Indonesia
            </h4>
            <p>Web Development My Blog</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Experience;
