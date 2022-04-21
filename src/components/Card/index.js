import React, { useEffect, useRef, useState } from 'react';
const Card = ({ data = null }) => {
  const [dataCard, setDataCard] = useState(data);
  const [active, setActive] = useState(0);
  const cardRef = useRef(0);
  let dataDumy = [
    {
      title: ' What is Success Rate?',
      content:
        ' Workers must maintain a success rate of above 75% at all times(Satisfied tasks). Too many Not-Satisfied tasks will lowerWorkers success rate. Low success rate prevents a Worker fromperforming jobs for the next 30 days.',
    },
    {
      title: ' Do job creators get charged for every task?',
      content:
        'Businesses pay only for tasks they are satisfied with. Picoworkers does not charge a fees for tasks that do not meet requirements set in the job. All job owners will have a chance to rate every submitted task.',
    },
    {
      title: ' Unacceptable jobs',
      content: (
        <ul>
          <li>Complete too many tasks in a single job</li>
          <li>
            Explicitly encourage clicking ads/pop ups, unlock a page, refresh
            page X times, reload, Play games (or similar) in order to finish the
            required task
          </li>
          <li>Spam or harm another website or person</li>
          <li>Promote Violent/Violence-related content or programs</li>
          <li>Promote illegal activities</li>
          <li>Involve websites dedicated to pornography</li>
          <li>Exchange money between payment systems</li>
          <li>Disclose personal information (unless you select Leads)</li>
          <li>
            Use a credit card or Provide Bank Account Details, or use any form
            of payment
          </li>
          <li>Sign-up for sites that require Membership or Activation Fees</li>
          <li>
            Sign-up for a free 14-day trial or similar offers that might risk
            involuntary payment after free offer expires
          </li>
          <li>
            Create fake reviews or testimonials of products or services. Any
            paid review or testimonial must clearly state they are compensated
            and the statement is still true and accurate based on a real
            experience.
          </li>
          <li>Transfer of Funds</li>
          <li>
            Any jobs involving Coinbase, PayPal, AWSurveys, Amazon, MTURK ,
            Yelp, Craigslist, Google Adsense, Piratebay, Google Voice, Alibaba,
            Google reviews, Uphold, Upstox, Crewdle, Grammarly, Purchase of old
            accounts.
          </li>
        </ul>
      ),
    },
    {
      title: ' Job fees',
      content:
        'In order to maintain a world class 24/7 platform with a fully staffed administration team, we must charge fees. Please think of our administrators as your work team partners. We charge fees to approve every job, correct jobs, monitor the submmitted tasks, and provide support services. Job approval fee is $0.65. Fee for tasks rated Satisfied is 7% charged to both worker and employer.',
    },
  ];
  useEffect(() => {
    cardRef.current = active;
  }, [active]);
  useEffect(() => {
    if (dataCard === null) {
      setDataCard(dataDumy);
    }
  }, []);
  const handleToggle = (index) => {
    if (index === cardRef.current) {
      setActive(-1);
    } else {
      setActive(index);
    }
  };
  return (
    <>
      <div className="card-accordion">
        {dataCard &&
          dataCard.map((item, index) => (
            <div
              className={`card ${
                active !== null &&
                cardRef.current !== active &&
                active === index
                  ? 'isactive'
                  : ''
              }`}
              id="card"
              key={index}
            >
              <div className="card-header">
                <h3 className="mb-0">
                  <button
                    className="card-button"
                    onClick={() => handleToggle(index)}
                  >
                    {item?.title}
                  </button>
                </h3>
              </div>
              <div id="card-collapse" className="card-collapse">
                <div className="card-body">{item?.content}</div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default React.memo(Card);
