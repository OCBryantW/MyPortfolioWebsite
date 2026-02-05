import './App.css'
import React, {useRef, useEffect} from "react"
import Navbar from './components/Navbar'
import Banner from './components/banner/Banner'
import About from './components/features/About'
import Contacts from './components/features/Contacts'
import Experience from './components/features/Experience'
import Projects from './components/features/Projects'
import { PreviewTracingBeam } from './components/ui/TracingBeamDemo'
import Lenis from 'lenis';



function App() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll ke atas saat refresh
  }, []);

  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  const contentRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing halus
      smooth: true,
      direction: 'vertical',
    })

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      requestAnimationFrame(() => {
        lenis.scrollTo(0, 0, { immediate: true });
      });
    }

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  // const [isPDFOpen, setIsPDFOpen] = useState(false);

  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <div className = "w-full h-auto overflow-clip">
      <div className="max-w-full mx-auto bg-prim xl:bg-quart">
      {/* <div className="max-w-full mx-auto bg-white"> */}
        <Navbar />
        <div>
          <PreviewTracingBeam contentRef={contentRef}/>
          <div ref={contentRef} className='content'>
            <Banner />
            {/* <PDFViewer/> */}
            <About/>
            <Projects/>
            <Experience/>
            <Contacts/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
