import React from 'react';

export default function About(props) {
  console.log('mode check',props);
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white'
  };

  return (
    <div className="container" style={myStyle}>
      <h2 className="my-3">About Us</h2>
      <div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyze Your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                <strong>"ProTextGenerator"</strong>, It is your go-to tool for transforming text into various formats. Whether you need text in uppercase, lowercase, or any other case style, our generator has you covered." <br />
                "Simply paste or type your text, and choose from a range of options to manipulate your text as needed. Analyze the character and word count, and see the magic of text transformation in action."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong> Free To Use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                "We're proud to offer our <strong>"ProTextGenerator"</strong> completely free of charge. There are no hidden fees, subscriptions, or limitations. It's a resource available to everyone, with no strings attached." <br />
                "Experience the freedom of transforming your text without worrying about costs. You can use our service for personal or professional needs without ever reaching for your wallet."
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                style={myStyle}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser Compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                "Our <strong>"ProTextGenerator"</strong> is designed to be browser compatible, ensuring a seamless experience for users across various web browsers." <br />
                "Whether you prefer Chrome, Firefox, Safari, Edge, or any other browser, you can enjoy the convenience of our text transformation tools without encountering compatibility issues. Use it anytime, anywhere."
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
