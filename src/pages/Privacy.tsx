import React from "react"
import CardPrivacy from "../components/Cards/CardPrivacy"
import { privacyData } from "../data/privacy"

export default function Privacy() {
  return (
    <section className="mt-[100px] lg:mt-[140px] scroll-mt-[6rem]">
      <div className="container mx-auto">
        <h2 className="font-sans text-[#000000CC] dark:text-[#FFFFFF] text-2xl lg:text-[34px] font-semibold mb-[50px] ">
          Приложение о Конфиденциальности Проекта TailTalks
        </h2>
        <div>
          {privacyData.map((data, index) => (
            <CardPrivacy
              key={index}
              title={data.title}
              text={data.text}
              list={data.list}
              conclusion={data.conclusion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
