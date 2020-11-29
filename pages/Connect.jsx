import { Card } from '../components/Containers';

export default function Connect() {
     return (
          <>
               <div id="Head">
                    <section>
                         <h1 style={{ color: '#111', fontSize: '4.5rem' }}>​</h1>
                    </section>
               </div>
               <section>
                    <div id="contactCard">
                         <Card textAlign="center" padding="5rem 10%">
                              <h1 style={{ fontSize: '4rem' }}>Say Hello!</h1>
                              <div id="contactForm">
                                   <form
                                        action="mailto:thevrajshah@gmail.com"
                                        method="post"
                                        encType="text/plain"
                                   >
                                        <input type="text" name="name" placeholder="Name" required />
                                        <input
                                             type="text"
                                             name="subject"
                                             placeholder="Subject"
                                             required
                                        />
                                        <input
                                             type="email"
                                             inputMode="email"
                                             name="email"
                                             placeholder="Your Email"
                                        />
                                        <textarea name="message" placeholder="Message" required />
                                        <button type="reset">
                                             <i className="fa fa-refresh" />
                                        </button>
                                        <button type="submit">
                                             Submit
                  <i className="fa fa-long-arrow-right m-1-10" />
                                        </button>
                                   </form>
                              </div>
                         </Card>
                    </div>
               </section>
          </>
     );
}
