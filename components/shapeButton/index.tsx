"use client"
import React, { useState, useEffect } from "react";
import { Button, Row } from 'antd';
import stype from './random.module.scss'
import { useRouter } from 'next/router'
import { Select } from 'antd';
import { useTranslation } from "react-i18next";


type Props = {};


export default function ShapeButton({ }: Props) {
  const { t, i18n } = useTranslation();
  const router = useRouter()
  const [shapes, setShapes] = useState<string[]>([]);
  const buttonShapes = [
    "triangle-left",
    "triangle-up",
    "triangle-down",
    "triangle-right",
  ];

  const handlelanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const generateRandomShapes = () => {
    const availableShapes = [
      "circle",
      "square",
      "triangle",
      "oval",
      "trapezoid",
      "parallelogram",
    ];

    const newShapes = [];

    for (let i = 0; i < 9; i++) {
      const randomIndex = Math.floor(Math.random() * availableShapes.length);
      const randomShape = availableShapes[randomIndex];
      newShapes.push(randomShape);
    }
    setShapes(newShapes);
  };

  useEffect(() => {
    generateRandomShapes();
  }, []);

  return (
    <div>

      <div className="w-full h-full">
        <Button className={stype.buttonbg} onClick={() => router.back()}>back menu</Button>
        <h1 className="">{t("stypes")}</h1>

        <div
          className={stype.languagecheck}
        >
          <Select
            defaultValue="language"
            style={{ width: 120 }}
            onChange={handlelanguage}
            options={[
              { value: 'th', label: 'th' },
              { value: 'en', label: 'en' },
            ]}
          />
        </div>
      </div>


      <div className="background-layout">

        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          cursor: "pointer",
          position: "relative",
          // gap: "20px",


        }}>
          {buttonShapes.map((btn, index) => (

            <div
              style={{
                position: "relative",
                backgroundColor: "#FFFFFF",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "300px",
                height: "200px",
                marginRight: index < buttonShapes.length - 1 ? (btn === "triangle-left" || btn === "triangle-down" ? "10px" : "0") : "0",
                // marginLeft: index < buttonShapes.length - 1 ? (btn === "triangle-down" ? "10px" : "0") : "0",

              }}
              onClick={generateRandomShapes}
              key={index}
            >
              <div className={`shape ${btn}`}></div>


              {index !== 1 ? (
                <div className="movedata1" style={{ position: "absolute", left: index === 2 ? "-4rem" : null }}>
                  {t("movevalue")}
                </div>
              ) : null}
              {/* {index === 1 && (
                <div className="movedata1" style={{ position: "absolute", left: "20px" }}>
                  {t("movevalue")}
                </div>
              )} */}
            </div>

          ))}
        </div>
        {/* <div className="movedata">
          <div className="movedata1">{t("movevalue")}</div>
          <div className="movedata2">{t("move_position")}</div>
          <div className="movedata3">{t("movevalue")}</div>
        </div> */}


        <div className="shape-container">
          {shapes.map((shape, index) => (
            <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxSizing: "border-box",
                width: "300px",
                height: "200px",

              }}
              onClick={generateRandomShapes}
              key={index}
            >
              <div className={`shape ${shape}`}></div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}



