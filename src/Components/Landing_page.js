import React from "react";
import { Cta } from "../Components/CTA";
import { DeviceWebStyle } from "./Webstyle";
import { StyleWhatsappHoverWrapper } from "./Hower";
import { SocialMediaLogo } from "../Components/Socialmedia";
import { SocialMediaLogo1 } from "../Components/Socialmedia1";
import { SocialMediaLogo2 } from "../Components/Socialmedia2";
import { StickyAnimationm } from "../Components/Stickyanimation";
import "../styles.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="div-2">
        <div className="overlap">
          <img
            className="ellipse-2"
            alt="Ellipse"
            src="https://c.animaapp.com/g1v2RMFM/img/ellipse-159.svg"
          />

          <img
            className="ellipse-3"
            alt="Ellipse"
            src="https://c.animaapp.com/g1v2RMFM/img/ellipse-160.svg"
          />

          <div className="overlap-wrapper">
            <div className="overlap-2">
              <div className="copyright-wrapper">
                <p className="copyright">
                  Copyright © 2025 UXloom Studio Pvt Ltd | All Rights Reserved
                </p>
              </div>

              <div className="group-4">
                <div className="group-wrapper">
                  <div className="overlap-group-wrapper">
                    <div className="overlap-3">
                      <div className="group-5">
                        <img
                          className="ellipse-4"
                          alt="Ellipse"
                          src="https://c.animaapp.com/g1v2RMFM/img/ellipse-7-1.svg"
                        />

                        <img
                          className="ellipse-5"
                          alt="Ellipse"
                          src="https://c.animaapp.com/g1v2RMFM/img/ellipse-8-1.svg"
                        />
                      </div>

                      <div className="div-wrapper">
                        <div className="overlap-group-2">
                          <img
                            className="ellipse-6"
                            alt="Ellipse"
                            src="https://c.animaapp.com/g1v2RMFM/img/ellipse-4-1.svg"
                          />

                          <img
                            className="ellipse-7"
                            alt="Ellipse"
                            src="https://c.animaapp.com/g1v2RMFM/img/ellipse-5-1.svg"
                          />

                          <img
                            className="ellipse-8"
                            alt="Ellipse"
                            src="https://c.animaapp.com/g1v2RMFM/img/ellipse-6-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="p">
                  At UXloom Studio, we specialize in creating user-centric
                  designs that transform brands and enhance digital experiences.
                  Let’s loom the future of design together.
                </p>

                <div className="frame-2">
                  <div className="text-wrapper-2">Home</div>

                  <div className="text-wrapper-2">Services</div>

                  <div className="text-wrapper-2">Portfolio</div>

                  <div className="text-wrapper-2">About Us</div>

                  <div className="text-wrapper-2">Contact Us</div>
                </div>

                <div className="frame-3">
                  <div className="text-wrapper-3">Follow us</div>

                  <div className="group-6">
                    <div className="social-media-card">
                      <SocialMediaLogo className="social-media-logo" />
                    </div>

                    <img
                      className="social-media-card-2"
                      alt="Social media card"
                      src="https://c.animaapp.com/g1v2RMFM/img/social-media-card.svg"
                    />

                    <div className="social-media-logo-wrapper">
                      <SocialMediaLogo1
                        className="icon-instance-node"
                        color="white"
                      />
                    </div>

                    <div className="social-media-logo-2-wrapper">
                      <SocialMediaLogo2 className="icon-instance-node" />
                    </div>
                  </div>
                </div>

                <div className="group-7">
                  <button className="CTA-2">
                    <div className="img-wrapper">
                      <img
                        className="img-2"
                        alt="Mail"
                        src="https://c.animaapp.com/g1v2RMFM/img/mail-24dp-5f6368-fill1-wght300-grad0-opsz24-1.svg"
                      />
                    </div>

                    <div className="text-wrapper-4">
                      Email : hello@uxloom.in
                    </div>
                  </button>

                  <button className="CTA-3">
                    <div className="img-wrapper">
                      <img
                        className="img-2"
                        alt="Phone in talk"
                        src="https://c.animaapp.com/g1v2RMFM/img/phone-in-talk-24dp-5f6368-fill1-wght300-grad0-opsz24-1.svg"
                      />
                    </div>

                    <div className="text-wrapper-4">Call : +91 8178652544</div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="group-8">
            <div className="overlap-4">
              <div className="text-wrapper-5">Let’s fix your design!</div>

              <div className="frame-4">
                <div className="frame-5">
                  <div className="text-wrapper-6">Full Name</div>

                  <div className="frame-6">
                    <input
                      type="text"
                      style={{ width: "100%", border: "none", outline: "none" }}
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                <div className="frame-5">
                  <div className="text-wrapper-6">Email</div>

                  <div className="frame-6">
                    <input
                      type="text"
                      style={{ width: "100%", border: "none", outline: "none" }}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="frame-wrapper">
                <div className="frame-5">
                  <div className="text-wrapper-6">Project Details</div>

                  <div className="frame-7">
                    <input
                      type="text"
                      style={{
                        width: "100%",
                        height: "100%",
                        border: "none",
                        outline: "none",
                      }}
                      multiple
                      maxLength={5000}
                      placeholder="Tell us about your project"
                    />
                  </div>
                </div>
              </div>

              <DeviceWebStyle
                className="device-web-style-primary-size-extralarge"
                text="Submit"
              />
            </div>
          </div>

          <p className="text-wrapper-8">
            We’d love to hear from you! Whether you’re looking for design
            solutions, a consultation, or just want to say hello, reach out to
            us anytime.
          </p>
        </div>

        <div className="overlap-5">
          <div className="overlap-6">
            <div className="group-9">
              <div className="overlap-7">
                <div className="ellipse-9" />

                <img
                  className="mask-group"
                  alt="Mask group"
                  src="https://c.animaapp.com/g1v2RMFM/img/mask-group.png"
                />

                <img
                  className="mask-group-2"
                  alt="Mask group"
                  src="https://c.animaapp.com/g1v2RMFM/img/mask-group-1.png"
                />

                {/* <img
                  className="ellipse-10"
                  alt="Ellipse"
                  src="https://c.animaapp.com/g1v2RMFM/img/ellipse-12.svg"
                /> */}

                <div className="frame-8">
                  <div className="overlap-8">
                    <div className="ellipse-11" />

                    <div className="group-10">
                      <div className="figma-icon-wrapper">
                        <img
                          className="figma-icon"
                          alt="Figma icon"
                          src="https://c.animaapp.com/g1v2RMFM/img/figma-icon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group-11">
                  <div className="frame-9">
                    <div className="overlap-group-3">
                      <div className="ellipse-12" />

                      <img
                        className="group-12"
                        alt="Group"
                        src="https://c.animaapp.com/g1v2RMFM/img/group-1784@2x.png"
                      />
                    </div>
                  </div>
                </div>

                <img
                  className="xd"
                  alt="Xd"
                  src="https://c.animaapp.com/g1v2RMFM/img/xd@2x.png"
                />

                <div className="group-13">
                  <div className="frame-10">
                    <div className="overlap-group-4">
                      <div className="ellipse-13" />

                      <img
                        className="group-14"
                        alt="Group"
                        src="https://c.animaapp.com/g1v2RMFM/img/group-1784-1@2x.png"
                      />
                    </div>
                  </div>
                </div>

                <img
                  className="group-15"
                  alt="Group"
                  src="https://c.animaapp.com/g1v2RMFM/img/group-1789@2x.png"
                />
              </div>
            </div>

            <StickyAnimationm className="sticky-animationm" />
            <StyleWhatsappHoverWrapper
              className="sticky-animationm-instance"
              hover={false}
              image="https://c.animaapp.com/g1v2RMFM/img/image-4459-2@2x.png"
              imageClassName="design-component-instance-node"
              style="whatsapp"
            />
          </div>

          <div className="navbar">
            <div className="frame-11">
              <div className="navbar-2">
                <div className="text-wrapper-9">Home</div>

                <div className="text-wrapper-9">Services</div>

                <div className="text-wrapper-9">About Us</div>

                <div className="text-wrapper-9">Portfolio</div>
              </div>

              <div className="nav-button">
                <div className="text-wrapper-10">Talk to Us</div>
              </div>

              <div className="group-16">
                <div className="overlap-group-wrapper">
                  <div className="overlap-3">
                    <div className="group-17">
                      <img
                        className="ellipse-4"
                        alt="Ellipse"
                        src="https://c.animaapp.com/g1v2RMFM/img/ellipse-7.svg"
                      />

                      <img
                        className="ellipse-5"
                        alt="Ellipse"
                        src="https://c.animaapp.com/g1v2RMFM/img/ellipse-8.svg"
                      />
                    </div>

                    <div className="div-wrapper">
                      <div className="overlap-group-2">
                        <img
                          className="ellipse-6"
                          alt="Ellipse"
                          src="https://c.animaapp.com/g1v2RMFM/img/ellipse-4.svg"
                        />

                        <img
                          className="ellipse-7"
                          alt="Ellipse"
                          src="https://c.animaapp.com/g1v2RMFM/img/ellipse-5-1.svg"
                        />

                        <img
                          className="ellipse-8"
                          alt="Ellipse"
                          src="https://c.animaapp.com/g1v2RMFM/img/ellipse-6.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-18">
            <p className="transform-your">
              <span className="span">Transform Your </span>

              <span className="text-wrapper-11">Digital Presence</span>

              <span className="span"> with </span>

              <span className="text-wrapper-12">Impactful Design✨🚀</span>
            </p>

            <div className="frame-12">
              <div className="frame-13">
                <div className="text-wrapper-13">UX Design</div>
              </div>

              <div className="frame-14">
                <div className="text-wrapper-14">Product Design</div>
              </div>
            </div>

            <p className="text-wrapper-15" style={{ marginTop: "40px" }}>
              Elevate user experiences, boost engagement, and drive growth with
              designs that truly make a difference.
            </p>

            <div className="nav-button-2">
              <p className="text-wrapper-10">Get Your Free UX Audit</p>
            </div>
          </div>
        </div>

        <div className="group-19">
          <div className="group-20">
            <div className="group-21">
              <img
                className="group-22"
                alt="Group"
                src="https://c.animaapp.com/g1v2RMFM/img/group-70583@2x.png"
              />
            </div>

            <div className="okti-foundation-logo-wrapper">
              <img
                className="okti-foundation-logo"
                alt="Okti foundation logo"
                src="https://c.animaapp.com/g1v2RMFM/img/okti-foundation-logo-1@2x.png"
              />
            </div>
          </div>

          <div className="text-wrapper-16">Our Clients</div>
        </div>

        <img className="line" alt="Line" src="/img/line-9.svg" />

        <div className="overlap-9">
          <div className="overlap-10">
            <div className="frame-15">
              <div className="text-wrapper-13">Founded: 2024</div>
            </div>

            <div className="overlap-11">
              <div className="text-wrapper-17">Who We Are</div>

              <img
                className="about-image"
                alt="About image"
                src="https://c.animaapp.com/g1v2RMFM/img/about-image-.png"
              />
            </div>

            <div className="flexcontainer">
              <p className="text">
                <span className="text-wrapper-18">
                  Founded in 2024, UXLoom Studio Ltd is committed to delivering
                  cutting-edge design solutions that help brands thrive in a
                  competitive digital landscape. With a focus on{" "}
                </span>

                <span className="text-wrapper-19">UI/UX</span>

                <span className="text-wrapper-18"> and </span>

                <span className="text-wrapper-20">Product Design</span>

                <span className="text-wrapper-18">
                  , we bring expertise, creativity, and strategy to every
                  project we undertake.
                  <br />
                </span>
              </p>

              <p className="text">
                <span className="text-wrapper-18">
                  Our mission is to empower businesses with designs that solve
                  user pain points and drive engagement. Let’s loom the future
                  of design together
                </span>
              </p>
            </div>

            <p className="text-wrapper-21">Looming the Future of Design</p>
          </div>

          <div className="frame-16">
            <div className="text-wrapper-13">HQ : Noida, India</div>
          </div>
        </div>

        <p className="your-one-stop">
          Your One-Stop Destination for <br />
          UI, UX, and Product Design
        </p>

        <div className="text-wrapper-22">Let’s Work Together</div>

        <div className="group-23">
          <p className="text-wrapper-23">Our Work Speaks for Itself</p>

          <p className="text-wrapper-24">
            Explore our projects and see how we’ve helped businesses enhance
            their digital presence and solve user pain points
          </p>

          <div className="overlap-12">
            <div className="group-24">
              <div className="laptop-wrapper1"></div>
            </div>

            <div className="text-wrapper-25">Innovartan Learning Solutions</div>

            <div className="frame-17">
              <div className="text-wrapper-13">Education</div>
            </div>

            <p className="text-wrapper-26">
              Website Design | Mobile App Design | UX Auditing
            </p>
          </div>

          <div className="overlap-14">
            <div className="group-25" />

            <div className="group-26">
              <div className="text-wrapper-27">Okti Foundation</div>

              <div className="frame-18">
                <div className="text-wrapper-13">NGO</div>
              </div>

              <p className="text-wrapper-28">
                Website Design Revamp | Donation Platform(SaaS)
              </p>
            </div>
          </div>

          <div className="frame-19">
            <div className="ellipse-14" />

            <div className="ellipse-15" />

            <div className="ellipse-15" />

            <div className="ellipse-15" />

            <div className="ellipse-15" />
          </div>
        </div>

        <div className="group-27">
          <div className="group-28">
            <div className="CTA-wrapper">
              <Cta
                className="CTA-instance"
                style="primary-with-icon"
                text="Let’s Talk"
              />
            </div>

            <div className="group-29">
              <p className="text-wrapper-29">
                Have a Project in Mind? Let’s Collaborate
              </p>
            </div>
          </div>
        </div>

        <div className="overlap-15">
          <div className="layer-wrapper">
            <img
              className="layer"
              alt="Layer"
              src="https://c.animaapp.com/g1v2RMFM/img/layer-1.svg"
            />
          </div>

          <div className="text-wrapper-30">UI Design</div>

          <p className="text-wrapper-31">
            Mobile App Design
            <br />
            Web App Design
            <br />
            SaaS Platform Design
          </p>
        </div>

        <div className="overlap-16">
          <div className="text-wrapper-30">UX Design</div>

          <p className="text-wrapper-31">
            User Research
            <br />
            UX Audits &amp; SWOT Analysis
            <br />
            A/B Testing &amp; Data Insights
          </p>

          <div className="layer-wrapper">
            <div className="ellipse-wrapper">
              <img
                className="ellipse-16"
                alt="Ellipse"
                src="https://c.animaapp.com/g1v2RMFM/img/ellipse-183.svg"
              />
            </div>
          </div>
        </div>

        <div className="overlap-17">
          <div className="text-wrapper-30">Product Design</div>

          <p className="text-wrapper-31">
            Entire Product Design Solutions
            <br />
            Wireframing &amp; Prototyping
            <br />
            End-to-End UX/UI Integration
          </p>

          <div className="layer-wrapper">
            <img
              className="layer-2"
              alt="Layer"
              src="https://c.animaapp.com/g1v2RMFM/img/layer-1-1.svg"
            />
          </div>
        </div>

        <div className="overlap-18">
          <div className="text-wrapper-30">Branding Services</div>

          <p className="text-wrapper-31">
            Branding &amp; Logo Design
            <br />
            Photography &amp; Podcast Setup
            <br />
            Videography
          </p>

          <div className="layer-wrapper">
            <img
              className="layer"
              alt="Layer"
              src="https://c.animaapp.com/g1v2RMFM/img/layer-1-2.svg"
              style={{ left: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
