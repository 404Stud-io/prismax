import React from "react";
// Style
import "./index.css";
// Image
import robot from "../../assets/robot.png";

export default function Menu() {
  return (
    <>
      <main>
        <div className="header">
          <h1>PrisMax</h1>
          <div></div>
        </div>
        <div className="infoContainer">
          <div className="infoMain">
            <p className="title">PrisMax</p>
            <p className="subTitle">Inovación en CRRT</p>
            <p className="detail">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
              natus assumenda iusto harum perferendis officia minima, maiores
              eos asperiores aperiam culpa reprehenderit facere a alias quod et
              doloribus optio repellat.
            </p>
            <p className="detail">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
              corporis expedita excepturi tempore voluptate neque quisquam
              veniam iste! Excepturi asperiores sunt ad vitae deleniti mollitia
              quae itaque neque, dicta fugiat. mos quas nam distinctio, ea iusto
              quibusdam suscipit expedita nemo eum. Repellat expedita asperiores
              mollitia sit harum cum aliquid vel, eaque, corrupti velit quos
              ipsum accusamus, molestias beatae in. Accusantium?
            </p>
          </div>
          <img src={robot} alt="" />
        </div>
      </main>
    </>
  );
}
