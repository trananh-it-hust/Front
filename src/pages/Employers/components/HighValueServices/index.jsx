import './styles.scss';

const HighValueServices = () => {
  return (
    <>
      <section className='high-value-service'>
        <div className='container'>
          <h1 className='title'>High-value services for IT Employers </h1>
          {/* flex box 1 */}
          <div className='flex-box-wrapper'>
            <div className='flex-row-reverse'>
              <div className='justify-content-center'>
                <img
                  src='https://itviec.com/assets/employer_landing/job-posting-15-30ceaa97f37fd97afb7dabc2c5ef6fe5702b78faf0c3da8aedb5d7d64b274a54.png'
                  alt=''
                />
              </div>
              <div className='flex-1'>
                <h1>Job Posting</h1>
                <p className='normal-text'>
                  Boost IT recruiting with our Tech and IT job platform. Manage
                  top candidate CVs from ITviec with ease. Intuitive interface,
                  prompt support, powerful tools.
                </p>
                <div className='d-lg-flex'>
                  <div className='job-posting-content-box flex-1'>
                    <img
                      src='https://itviec.com/assets/employer_landing/opportunities-a53edbeb973cfeaa459e920b7a4562354aa02a1c83a53150cf8ebf17aaa7ce57.svg'
                      alt=''
                    />
                    <p className='paragraph'>
                      Better opportunities to approach top IT candidates from
                      ITviec
                    </p>
                  </div>

                  <div className='job-searching-content-box flex-1'>
                    <img
                      src='https://itviec.com/assets/employer_landing/right-skill-be1892ff9d11b80aeab90527abe6b19cfb855ab95fbcc9b7bc75c89184353bfd.svg'
                      alt=''
                    />
                    <p className='paragraph'>
                      Attract the right candidates by the right skills
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* flex box 2 */}
          <div className='flex-box-wrapper'>
            <div className='flex-row-reverse'>
              <div className='flex-1'>
                <h1>AI Match</h1>
                <p className='normal-text'>
                  Connect with a diverse pool of active IT Professionals.
                  Effortlessly approach top candidates with one click. Unlock
                  perfect matches.
                </p>
                <div className='d-lg-flex'>
                  <div className='job-posting-content-box flex-1'>
                    <img
                      src='https://itviec.com/assets/employer_landing/opportunities-a53edbeb973cfeaa459e920b7a4562354aa02a1c83a53150cf8ebf17aaa7ce57.svg'
                      alt=''
                    />
                    <p className='paragraph'>
                      Best-fit candidates are matched based on their skills,
                      experience, job preferences and more
                    </p>
                  </div>

                  <div className='job-searching-content-box flex-1'>
                    <img
                      src='https://itviec.com/assets/employer_landing/right-skill-be1892ff9d11b80aeab90527abe6b19cfb855ab95fbcc9b7bc75c89184353bfd.svg'
                      alt=''
                    />
                    <p className='paragraph'>
                      Only connect with IT talents who are active in making a
                      career jump
                    </p>
                  </div>
                </div>
              </div>
              <div className='justify-content-center'>
                <img
                  src='https://itviec.com/assets/employer_landing/ai-match-15-22d68e502f2d153eec13bae292cf4207d3e90e22ff153b0a28cfcfd26592f75f.png'
                  alt=''
                />
              </div>
            </div>
          </div>

          {/* flex box 3 */}
          <div className='flex-box-wrapper'>
            <div className='flex-row-reverse'>
              <div className='justify-content-center'>
                <img
                  src='https://itviec.com/assets/employer_landing/employer-branding-15-9901407b309ba5b978b453490ba825d6e1c6c82c488649032f98840cd14eed04.png'
                  alt=''
                />
              </div>
              <div className='flex-1'>
                <h1>Employer Branding</h1>
                <p className='normal-text'>
                  Increase brand awareness, reach IT Professionals on ITviec
                  through specialized touch points, and connect with top
                  Vietnamese IT candidates.
                </p>
                <div className='d-lg-flex'>
                  <div className='job-posting-content-box flex-1'>
                    <img
                      src='https://itviec.com/assets/employer_landing/opportunities-a53edbeb973cfeaa459e920b7a4562354aa02a1c83a53150cf8ebf17aaa7ce57.svg'
                      alt=''
                    />
                    <div>
                      <p className='bold-text'>Top Employers</p>
                      <p className='paragraph'>
                        Appear as outstanding & leading IT companies in Vietnam
                      </p>
                    </div>
                  </div>

                  <div className='job-searching-content-box flex-1'>
                    <img
                      src='https://itviec.com/assets/employer_landing/right-skill-be1892ff9d11b80aeab90527abe6b19cfb855ab95fbcc9b7bc75c89184353bfd.svg'
                      alt=''
                    />
                    <div>
                      <p className='bold-text'>Company Spotlight</p>
                      <p className='paragraph'>
                        Strengthen the employer branding to top IT talents
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='btn-contact'>
          <h3>Experience ITviec service today</h3>
          <div className='btn-text'>
            <button className='contact-btn'>Contact</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HighValueServices;
