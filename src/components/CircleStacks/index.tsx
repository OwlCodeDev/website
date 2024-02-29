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

function CircleStacks(): JSX.Element {
  return (
    <div
      className="hidden md:display md:block max-w-3xl"
      style={{
        minWidth: "35rem",
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
              width: "5rem",
              bottom: "4.5rem",
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
              width: "4.5rem",
              left: "27rem",
              top: "3.5rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoAI}
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
              width: "4rem",
              top: "4.5rem",
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
              width: "5rem",
              bottom: "10.5rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              left: "26.2rem",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoReact}
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
              width: "3.5rem",
              left: "16rem",
              top: "21.5rem",
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
              width: "3rem",
              left: "8rem",
              bottom: "23rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoGCloud}
          />
        </div>
        <div
          className="rotate_orbita_1"
          style={{
            right: "6rem",
            left: "7rem",
            bottom: "6rem",
            top: "7rem",
            border: "2px solid #FFFFFF40",
            borderRadius: "1000rem",
            position: "absolute",
            boxSizing: "border-box",
          }}
        >
          <img
            style={{
              width: "5rem",
              left: "1.5rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoNode}
          />
          <img
            style={{
              width: "4rem",
              left: "18rem",
              top: "10rem",
              boxShadow:
                "rgba(8, 11, 14, 0.06) 0px 0px 1px 0px, rgba(8, 11, 14, 0.1) 0px 6px 6px -1px",
              borderRadius: "8px",
              position: "absolute",
              lineHeight: "24px",
              transition: "all 0.4s ease-in-out 0s",
            }}
            src={logoKafka}
          />
          <img
            style={{
              width: "2.5rem",
              left: "10rem",
              top: "19.5rem",
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
            <OwlCodeLogoComponent width={100} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CircleStacks;
