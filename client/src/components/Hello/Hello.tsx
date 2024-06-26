"use client";
import css from "./Hello.module.scss";
import Logo from "/public/images/logo.svg";
import Button from "../ui/Button/Button";
import ParticleConfig from "./ParticleConfig";
import Image from "next/image";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

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
            <a href="https://ancient-renewal-9f86ea79bc.strapiapp.com/admin/">
              <Button>Войти</Button>
            </a>
          </div>
        </div>
        <div className={css.Main}>
          <div className={css.TextBlock}>
            <div className={css.Title}>Узнай больше про "Перекрёсток"</div>
            <div className={css.Subtitle}>
              Начни работать с нами или стань нашим партнёром уже завтра!
            </div>
            <div className={css.Interactive}>
              <a href="#catalog">
                <Button>Товары</Button>
              </a>
              <a href="#partners">
                <Button>Партнёры</Button>
              </a>
              <a href="#vacancies">
                <Button>Вакансии</Button>
              </a>
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
