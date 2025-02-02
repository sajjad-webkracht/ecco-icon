import React, { useEffect } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import Caution from '../components/caution';
import dangerIcon from '../images/danger.svg'
import { Link } from 'gatsby';
import Color_Guide_1 from '../images/guide_color_1.png'
import Color_Guide_2 from '../images/guide_color_2.png'
import Seo from '../components/seo'


const HowToUse = () => {
    useEffect(() => {
        const handleHashChange = () => {
          const hash = window.location.hash.substring(1);
          const sections = document.querySelectorAll('.section');
          const links = document.querySelectorAll('a[href^="#"]');
          sections.forEach(section => {
            if (section.id === hash) {
              section.style.display = 'block';
            } else {
              section.style.display = 'none';
            }
          });
          links.forEach(link => {
            if (link.getAttribute('href').substring(1) === hash) {
              link.classList.add('font-bold');
            } else {
              link.classList.remove('font-bold');
            }
          });
        };

        const handleLinkClick = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            window.history.pushState(null, '', `#${targetId}`);
            window.scrollTo(0, 0);
            handleHashChange();
          };

          if (!window.location.hash) {
            window.history.replaceState(null, '', '#introduction');
          }
      
          document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', handleLinkClick);
          });

          handleHashChange(); // Call it initially to handle the case when the page is loaded with a hash

          return () => {
            window.removeEventListener('hashchange', handleHashChange);
            document.querySelectorAll('a[href^="#"]').forEach(link => {
              link.removeEventListener('click', handleLinkClick);
            });
          };
        }, []);
  
    return (
        <div>
            <Header />
            <div className='mb-12 md:mb-0 py-4 md:pb-16 px-4 md:px-12 flex flex-col md:flex-row md:mt-12 gap-4 md:gap-12 items-start'>
                <div className='w-full md:w-1/4 bg-zinc-100 rounded-xl flex flex-col gap-3 py-4 md:sticky top-12 mb-7 md:mb-0'>
                    <a href='#introduction' className='text-zinc-800 w-full pr-4 group flex h-7 items-center duration-700 hover:-tracking-wide'>
                        <div className='w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 duration-700 h-full mr-4 bg-gradient-to-r from-ao to-[#d7defa] rounded-r-xl' />
                        Introduction
                    </a>
                    <a href='#usage' className='text-zinc-800 w-full pr-4 group flex h-7 items-center duration-700 hover:tracking-wide'>
                        <div className='w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 duration-700 h-full mr-4 bg-gradient-to-r from-ao to-[#d7defa] rounded-r-xl' />
                        How to Use
                    </a>
                    <a href='#compatibility' className='text-zinc-800 w-full pr-4 group flex h-7 items-center duration-700 hover:tracking-wide'>
                        <div className='w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 duration-700 h-full mr-4 bg-gradient-to-r from-ao to-[#d7defa] rounded-r-xl' />
                        Platform Compatibility
                    </a>
                    <a href='#colors' className='text-zinc-800 w-full pr-4 group flex h-7 items-center duration-700 hover:tracking-wide'>
                        <div className='w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 duration-700 h-full mr-4 bg-gradient-to-r from-ao to-[#d7defa] rounded-r-xl' />
                        Customizing Colors
                    </a>
                    <a href='#license' className='text-zinc-800 w-full pr-4 group flex h-7 items-center duration-700 hover:tracking-wide'>
                        <div className='w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 duration-700 h-full mr-4 bg-gradient-to-r from-ao to-[#d7defa] rounded-r-xl' />
                        How Licensing Works
                    </a>
                    <a href='#help' className='text-zinc-800 w-full pr-4 group flex h-7 items-center duration-700 hover:tracking-wide'>
                        <div className='w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 duration-700 h-full mr-4 bg-gradient-to-r from-ao to-[#d7defa] rounded-r-xl' />
                        How to Help
                    </a>
                    
                </div>
                <div className='w-full md:w-3/4 md:px-12 text-zinc-800'>
                    <div id='introduction' className='section' style={{ display: 'none' }}>
                        <h1 className='text-4xl font-bold mb-2'>Introduction</h1>
                        <p className='mb-2 text-zinc-600'>Ecco Icon is a project inspired by my passion for the creative community and my personal needs while working on various design projects. All animated icons are crafted in Adobe After Effects and exported using the <a href='https://aescripts.com/bodymovin/' className='text-ao font-bold'>Bodymovin</a> plugin.</p>
                        <p className='text-zinc-600'>To learn more about the project, visit <Link to="/about" className='text-ao font-bold'>this</Link> page. If you'd like to see the project grow and continue, please consider making a <Link to='/donate' className='text-ao font-bold'>donation</Link>. Even the smallest contribution helps keep this project alive.</p>
                    </div>
                    
                    <div id='usage' className='section' style={{ display: 'none' }}>
                        <h1 className='text-4xl font-bold mb-2'>How to Use</h1>
                        <p className='mb-2 text-zinc-600'>
                            The animated icons in the Ecco Icon pack are created using Lottie, an open-source project supported by LottieFiles, LottieLab, Airbnb, and other companies. Lottie uses SVG-based animations, eliminating the need for heavier and less smooth bitmap formats like .mp4 or .gif.
                        </p>
                        <p className='mb-2 text-zinc-600'>
                            Each animation comes with both a <mark className='bg-zinc-200 px-1 rounded-sm'>.json</mark> file and a <mark className='bg-zinc-200 px-1 rounded-sm'>.lottie</mark> file. The .lottie format is a newer and more compressed alternative for these animations.
                        </p>
                        <p className='mb-2 text-zinc-600'>
                            Lottie animations can be implemented on websites, Android apps, and iOS apps.
                        </p>
                        <p className='mb-2 text-zinc-600'>
                            Additionally, the <mark className='bg-zinc-200 px-1 rounded-sm'>.aep</mark> file (After Effects project file) is provided in case you want to modify the animation or change its colors. <mark className='bg-zinc-200 px-1 rounded-sm'>.svg</mark> and <mark className='bg-zinc-200 px-1 rounded-sm'>.png</mark>  files are also included if you prefer to use the icons in a non-animated format.
                        </p>
                        <h2 className='font-bold text-2xl mt-8 mb-2'>dotLottie</h2>
                        <p className='mb-2 text-zinc-600'><a href='https://dotlottie.io/intro/#background' className='font-bold text-ao'>dotLottie</a> is a modern, optimized format designed to streamline the usage of Lottie animations. Unlike traditional <mark className='bg-zinc-200 px-1 rounded-sm'>.json</mark> files, dotLottie packages animations along with all their necessary assets into a single compressed file, improving performance and simplifying implementation.</p>

                        <p className='mt-8 text-zinc-600'><a href='https://developers.lottiefiles.com/docs/' className='text-ao font-bold'>LottieFiles</a> has developed a variety of libraries to make implementing Lottie and dotLottie animated icons easier for developers. Below is a list of their tools:</p>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-6'>
                            <a href='https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-web/' className='border-zinc-200 rounded-xl p-6 border-[1px] hover:border-ao duration-500'>
                                <span className='block mb-2 font-bold'>dotLottie-web</span>
                                <span className='text-sm text-zinc-500'>dotLottie-web is the main web player, serving as the foundation for other framework-specific players.</span>
                            </a>
                            <a href='https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-react/' className='border-zinc-200 rounded-xl p-6 border-[1px] hover:border-ao duration-500'>
                                <span className='block mb-2 font-bold'>dotLottie-react</span>
                                <span className='text-sm text-zinc-500'>
                                dotLottie-react is a React component that simplifies embedding Lottie animations into your React applications.</span>
                            </a>
                            <a href='https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-react-native/' className='border-zinc-200 rounded-xl p-6 border-[1px] hover:border-ao duration-500'>
                                <span className='block mb-2 font-bold'>dotLottie-react-native</span>
                                <span className='text-sm text-zinc-500'>
                                dotLottie-react-native is a React Native component that makes it easy to embed Lottie animations into your React Native applications.</span>
                            </a>
                            <a href='https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-wc/' className='border-zinc-200 rounded-xl p-6 border-[1px] hover:border-ao duration-500'>
                                <span className='block mb-2 font-bold'>dotLottie-wc</span>
                                <span className='text-sm text-zinc-500'>
                                dotLottie-wc is a web component that simplifies embedding Lottie animations into your web applications.</span>
                            </a>
                            <a href='https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-vue/' className='border-zinc-200 rounded-xl p-6 border-[1px] hover:border-ao duration-500'>
                                <span className='block mb-2 font-bold'>dotLottie-vue</span>
                                <span className='text-sm text-zinc-500'>
                                dotLottie-vue is a Vue component that makes it easy to embed Lottie animations into your Vue applications.</span>
                            </a>
                            <a href='https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-svelte/' className='border-zinc-200 rounded-xl p-6 border-[1px] hover:border-ao duration-500'>
                                <span className='block mb-2 font-bold'>dotLottie-svelte</span>
                                <span className='text-sm text-zinc-500'>
                                DotLottieSvelte is a Svelte component that simplifies embedding Lottie animations into your Svelte applications.</span>
                            </a>
                            <a href='https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-ios/' className='border-zinc-200 rounded-xl p-6 border-[1px] hover:border-ao duration-500'>
                                <span className='block mb-2 font-bold'>dotLottie-ios</span>
                                <span className='text-sm text-zinc-500'>
                                Use this package to integrate Lottie/dotLottie animations into your iOS app.</span>
                            </a>
                            <a href='https://developers.lottiefiles.com/docs/dotlottie-player/dotlottie-android/' className='border-zinc-200 rounded-xl p-6 border-[1px] hover:border-ao duration-500'>
                                <span className='block mb-2 font-bold'>dotLottie-android</span>
                                <span className='text-sm text-zinc-500'>
                                Use this package to integrate Lottie/dotLottie animations into your Android app.</span>
                            </a>
                        </div>


                    </div>

                    <div id='compatibility' className='section' style={{ display: 'none' }}>
                            <h1 className='text-4xl font-bold mb-2'>Platform Compatibility</h1>
                            <p className='mb-10 text-zinc-600'>Ecco Icon is compatible with all platforms supported by Lottie. You can use it on the web (regardless of the technology, such as React, Vue, etc.), as well as in iOS and Android apps.</p>
                            <Caution text={"Using these animations in Windows apps with Lottie-Windows may cause issues, and Ecco Icon does not officially support this setup. While I haven't tested it directly, many icons rely on Trim Paths (a feature in After Effects), which is not supported by Lottie-Windows. As a result, icons utilizing this feature may experience problems in Windows apps."} />
                    </div>

                    <div id='colors' className='section' style={{ display: 'none' }}>
                        <h1 className='text-4xl font-bold mb-2'>Customizing Colors</h1>
                        <p className='mb-2 text-zinc-600'>
                            To change the color of an icon, download the <mark className='bg-zinc-200 px-1 rounded-sm'>.aep</mark> file and import it into the latest version of After Effects to avoid any potential issues. Each animation includes a Null object named <strong>"Color Controller,"</strong> where you can adjust the icon's color through the Effect Controls panel, as shown below.
                        </p>
                        <img src={Color_Guide_1} alt='Color Guide Screenshot' className='w-full my-8' />
                        <p className='mb-2 text-zinc-600'>
                            If you want to export to dotLottie, ensure that the colors are correctly applied in the exported file by using the latest <a href='https://lottiefiles.com/plugins/after-effects' target='_blank' className='text-ao font-bold'>LottieFiles plugin</a>. In the Rendering Settings, make sure to check "Convert Expressions to Keyframes."
                        </p>
                        <img src={Color_Guide_2} alt='Color Guide Screenshot' className='w-full mt-8 mb-16' />
                        <Caution text={"There are online tools that allow you to change the color of Lottie animations without using After Effects. However, be cautious, as some of these tools may cause unexpected rendering issues. I developed a module to change animation colors directly on the Ecco Icon platform and also encountered these unexpected issues in the rendered animations. The exact cause remains unknown to me."} />
                    </div>

                    <div id='license' className='section' style={{ display: 'none' }}>
                        <h1 className='text-4xl font-bold mb-2'>How Licensing Works for Ecco Icon</h1>
                        <p className='mb-2 text-zinc-600'>Ecco Icon is proud to offer a collection of animated icons that are entirely free for use under the <a href='https://creativecommons.org/licenses/by/4.0/' className='text-ao font-bold'>Creative Commons Attribution 4.0 International (CC BY 4.0) License</a>. This means you are free to use, share, and even modify these icons in your projects—whether personal or commercial—provided that you give appropriate credit to the creator. Below, I’ll explain how the licensing works in detail and how you can properly provide attribution.</p>

                        <h2 class="text-xl font-semibold mt-8">What Does CC BY 4.0 Allow?</h2>
                        <p class="text-base leading-relaxed text-zinc-600">
                            The CC BY 4.0 License is designed to give you as much freedom as possible while ensuring that creators are credited
                            for their work. Under this license, you can:
                        </p>

                        <ul class="list-disc pl-4 space-y-2 mt-3 text-zinc-600">
                            <li><strong>Use the Icons for Free:</strong> The icons can be used in websites, apps, videos, presentations, advertisements, or any other medium you choose.</li>
                            <li><strong>Modify the Icons:</strong> You are allowed to edit, recolor, resize, or otherwise adapt the icons to suit your needs.</li>
                            <li><strong>Distribute the Icons:</strong> You can include the icons in your own products, projects, or packages, as long as attribution is provided.</li>
                            <li><strong>Use Them Commercially:</strong> The icons can be used in commercial projects, such as client work, software products, or advertisements.</li>
                        </ul>

                        <h2 class="text-xl font-semibold mt-8">What Are Your Obligations?</h2>
                        <p class="text-base leading-relaxed text-zinc-600">
                            The only requirement for using Ecco Icon’s animated icons is to provide proper attribution. This ensures that the
                            creator is acknowledged for their work, even when the icons are used in large-scale or commercial projects.
                        </p>

                        <h2 class="text-xl font-semibold mt-8">How to Provide Attribution</h2>
                        <p class="text-base leading-relaxed text-zinc-600">
                            To comply with the CC BY 4.0 License, you need to include the following details in your attribution:
                        </p>
                        <ul class="list-disc pl-4 mt-3 space-y-2 text-zinc-600">
                            <li><strong>Creator’s Name:</strong> Mention that the icons were created by <strong>Sajjad Dashti</strong>.</li>
                            <li><strong>Source:</strong> Include the name of the platform, <strong>Ecco Icon</strong>, and ideally provide a link to the website (e.g., <a href="https://eccoicon.com" class="text-ao font-bold">https://eccoicon.com</a>).</li>
                            <li><strong>License Type:</strong> Specify that the icons are licensed under the Creative Commons Attribution 4.0 International (CC BY 4.0) License.</li>
                        </ul>

                        <div class="bg-zinc-50 p-6 rounded-xl border border-zinc-300 mt-4">
                            <p class="text-sm font-mono">
                                Icons by Sajjad Dashti, available for free on Ecco Icon under the CC BY 4.0 License:
                                <a href="https://eccoicon.com" class="text-ao font-bold">https://eccoicon.com</a>
                            </p>
                        </div>

                        <h2 class="text-xl font-bold mt-8">Where Should Attribution Be Placed?</h2>
                        <p class="text-base leading-relaxed text-zinc-600">
                            The placement of the attribution depends on how and where the icons are used. Here are some examples:
                        </p>
                        <ul class="list-disc pl-4 mt-3 space-y-2 text-zinc-600">
                            <li><strong>Websites and Apps:</strong> Add attribution in the footer, credits page, or a relevant section of your website or app.</li>
                            <li><strong>Videos:</strong> Include the attribution in the credits section or in the video description.</li>
                            <li><strong>Presentations:</strong> Place the attribution on the slide where the icons are used or on a dedicated credits slide.</li>
                            <li><strong>Printed Material:</strong> Add the attribution in a visible part of the printed design, such as a footnote or the back cover.</li>
                        </ul>


                        <h2 class="text-xl font-bold mt-8">What Happens if You Don’t Provide Attribution?</h2>
                        <p class="text-base leading-relaxed text-zinc-600">
                            Failure to provide proper attribution means you are not complying with the terms of the CC BY 4.0 License. If you
                            cannot or do not want to include attribution, you must contact the creator to negotiate separate licensing terms.
                        </p>

                        <h2 class="text-xl font-bold mt-8">Why Attribution Matters</h2>
                        <p class="text-base leading-relaxed text-zinc-600">
                            Providing attribution is a small yet meaningful way to support the work of creators. By acknowledging the creator
                            and the platform, you help raise awareness about the project, allowing it to grow and remain free for the community.
                        </p>

                        <p class="text-base leading-relaxed mt-8 text-zinc-600">
                            If you have any questions about licensing or how to provide attribution, feel free to contact me through 
                            <a href="mailto:sajjaddashti.ir" class="text-ao font-bold"> my personal email</a>. Thank you for supporting open creativity!
                        </p>

                    </div>


                    <div id='help' className='section' style={{ display: 'none' }}>
                        <h1 className='text-4xl font-bold mb-2'>How to Help</h1>
                        <p className='mb-2 text-zinc-600'>    Ecco Icon is a passion project created to provide free animated icons for the creative community. It’s entirely
                            free to use, and I’m committed to keeping it that way. However, maintaining and expanding the project requires time,
                            effort, and resources.</p>

                        <p class="text-base mt-8 mb-12 text-zinc-600">
                            Every donation, no matter how small, makes a huge difference. Your support helps cover the costs of maintaining the
                            platform, creating new animated icons, and keeping everything free and accessible for everyone. By contributing,
                            you’re not just supporting me—you’re supporting the entire creative community.
                        </p>

                        <Link to='/donate' className='text-zinc-50 mt-2 bg-zinc-800 hover:bg-opacity-0 px-9 py-3 rounded-md text-base hover:px-12 duration-500 relative overflow-hidden'>
                            Donate
                            <span className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#c1b7f3] via-[#69bbeb] to-[#42abea] -z-[1] rounded-md' />
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default HowToUse;

export const Head = () => (
    <Seo 
      title="How to Use?" 
      description="Ecco Icon is a project inspired by my passion for the creative community and my personal needs while working on various design projects. All animated icons are crafted in Adobe After Effects and exported using Bodymovin." 
    />
  )