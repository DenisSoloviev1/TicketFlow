import React from "react";
import styles from "./styles.module.scss";
import { Container } from "../../components/Container";
import { Revers, Train } from "../../assets/svg";
import { CustomButton } from "../../components/CustomButton";
import { Space, Carousel } from "antd";
import type { CascaderProps } from "antd";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const onChange: CascaderProps<Option>["onChange"] = (value) => {
  console.log(value);
};

export const WelcomePage: React.FC = () => {
  return (
    <>
      <section className={styles.hello}>
        <div className={styles.content}>
          <h2>Бронировать Ж/Д билеты теперь быстро и просто</h2>

          <Container active={false} className={"pd20"}>
            <form action="">
              <input type="text" placeholder="От куда" />
              <button type="button" className={styles.revers}>
                <Revers />
              </button>
              <input type="text" placeholder="Куда" />
            </form>
            <div className={styles.train}>
              <Train />
            </div>
            <CustomButton className={"blue"} type={"submit"}>
              Поиск
            </CustomButton>
          </Container>
        </div>
      </section>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        <Carousel>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Space>
    </>
  );
};
