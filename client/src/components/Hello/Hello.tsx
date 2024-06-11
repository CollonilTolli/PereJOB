"use client";
import css from "./Hello.module.scss";
import Logo from "/public/images/logo.svg";
import Button from "../ui/Button/Button";
import Image from "next/image";
import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import ParticleConfig from "./ParticleConfig";

export default function Hello() {
  const particlesInit = useCallback(async (engine: any) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  return (
    <div className={css.Container}>
      <Particles
        id="tsparticles"
        options={ParticleConfig}
        init={particlesInit}
        loaded={particlesLoaded}
      ></Particles>
      <div className={css.Content}>
        <div className={css.Header}>
          <div className={css.Logo}>
            <Logo />
          </div>
          <div className={css.Interactive}>
            <Button>Начать работать</Button>
            <Button>Войти</Button>
          </div>
        </div>
        <div className={css.Main}>
          <div className={css.TextBlock}>
            <div className={css.Title}>Работа в перекрёстке</div>
            <div className={css.Subtitle}>Начни работать уже завтра!</div>
            <div className={css.Interactive}>
              <Button>Вакансии</Button>
              <Button>Отзывы</Button>
            </div>
          </div>
          <div className={css.ImageBlock}>
            <Image src="/images/girl.png" alt="" width={421} height={496} />
          </div>
        </div>
      </div>
    </div>
  );
}
