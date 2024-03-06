import logoReact from "./react-Icon.svg";
import logoKafka from "./kafka-svgrepo-com.svg";
import logoAndroid from "./android-color-svgrepo-com.svg";
import logoAws from "./aws-svgrepo-com.svg";
import logoNode from "./node-js-svgrepo-com.svg";
import logoPython from "./python-svgrepo-com.svg";
import logoGCloud from "./google-cloud-svgrepo-com.svg";
import logoAI from "./ai-svgrepo-com.svg";
import logoOpenAI from "./openai-svgrepo-com.svg";
import OwlCodeLogoComponent from "../OwlCodeLogo";
import "./style.css";

function CircleStacksMobile(): JSX.Element {
  return (
    <div
      className="sm:display sm:block max-w-2xl"
      style={{
        minWidth: "15rem",
        boxSizing: "border-box",
        paddingRight: "calc(8px)",
        paddingLeft: "calc(8px)",
      }}
    >
      <div
        style={{
          paddingBottom: "100%",
          marginTop: "0rem",
          width: "100%",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <div
          className="rotate_orbita_4"
          style={{
            border: "2px solid #FFFFFF10",
            left: "1rem",
            top: "1rem",
            borderRadius: "1000rem",
            bottom: "0px",
            position: "absolute",
            right: "0px",
            boxSizing: "border-box",
            transition: "all 0.4s ease-in-out 0s",
          }}
        >
          <img
            style={{
              width: "2rem",
              bottom: "8.5rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoAws}
          />
          <img
            style={{
              width: "2.5rem",
              left: "8rem",
              top: "11rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoAI}
          />
          <img
            style={{
              width: "3rem",
              left: "8.5rem",
              bottom: "10rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoKafka}
          />
        </div>
        <div
          className="rotate_orbita_3"
          style={{
            right: "2rem",
            left: "3rem",
            bottom: "2rem",
            top: "3rem",
            border: "2px solid #FFFFFF20",
            borderRadius: "1000rem",
            position: "absolute",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              width: "1.5rem",
              top: "7rem",
              left: "1rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoPython}
          />
          <img
            style={{
              width: "2rem",
              bottom: "7rem",
              left: "1rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoReact}
          />
                    <img
            style={{
              width: "2rem",
              left: "6rem",
              bottom: "7rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoOpenAI}
          />
        </div>

        <div
          className="rotate_orbita_2"
          style={{
            right: "4rem",
            left: "5rem",
            bottom: "4rem",
            top: "5rem",
            border: "2px solid #FFFFFF30",
            borderRadius: "1000rem",
            position: "absolute",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              width: "1.5rem",
              left: "2rem",
              top: "4rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoAndroid}
          />
          <img
            style={{
              width: "1.5rem",
              left: "2rem",
              bottom: "4rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoGCloud}
          />
          <img
            style={{
              width: "3rem",
              right: "3rem",
              bottom: "1rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoNode}
          />
        </div>

        <div
          style={{
            right: "6rem",
            left: "7rem",
            bottom: "6rem",
            top: "7rem",
            borderRadius: "1000rem",
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            boxSizing: "border-box",
          }}
        >
          <div className="border-b-2">
            <OwlCodeLogoComponent width={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleStacksMobile;
