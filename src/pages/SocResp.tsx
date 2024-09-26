import React from "react"
import SocRepCat1440 from "../assets/images/SoCrep/socrep-main-cat1440.png"
import SocRepCat1024 from "../assets/images/SoCrep/socrep-main-cat1024.png"
import SocRepCat360 from "../assets/images/SoCrep/socrep-main-cat360.png"
import SocRepDog1_1440 from "../assets/images/SoCrep/socrep-main-dog1-1440.png"
import SocRepDog1_1024 from "../assets/images/SoCrep/socrep-main-dog1-1024.png"
import SocRepDog1_360 from "../assets/images/SoCrep/socrep-main-dog1-360.png"
import SocRepDog2_1440 from "../assets/images/SoCrep/socrep-main-dog2-1440.png"
import SocRepDog2_1024 from "../assets/images/SoCrep/socrep-main-dog2-1024.png"
import SocRepDog2_360 from "../assets/images/SoCrep/socrep-main-dog2-360.png"

export default function SocResp() {
  return (
    <main className="xs:mt-[115px] xs:container mx-auto mt-[125px] px-[24px]">
      <section className="mb-[30px] flex flex-col items-center justify-between">
        <h1 className="xs:text-4xl mb-[30px] font-[Comfortaa] text-2xl font-semibold text-white">
          Социальная ответственность платформы Tail Talks: связь,
          забота&nbsp;и&nbsp;добро
        </h1>
        <p className="xs:text-lg font-[Rubik] text-base font-light text-[#BEBEBE]">
          Дорогие друзья! Добро пожаловать на нашу уникальную социальную сеть,
          где каждый лайк, каждая фотография и каждое сообщение несут в себе не
          только радость общения, но и ответственность перед миром животных.
        </p>
      </section>
      <section className="xs:flex-row mb-[30px] flex flex-col items-center justify-between">
        <div className="xs:mr-[40px] flex flex-col">
          <h2 className="mb-6 font-[Rubik] text-xl font-medium text-[#BEBEBE]">
            1. Общение и поддержка
          </h2>
          <p className="xs:text-lg font-[Rubik] text-base font-light text-[#BEBEBE]">
            Мы создали это пространство для вас, чтобы вы могли делиться своими
            радостями и заботой о питомцах. Здесь вы найдете единомышленников,
            которые разделяют вашу любовь к животным. Общение — это не только
            приятно, но и полезно. Вы можете задавать вопросы, делиться опытом и
            поддерживать друг друга.
          </p>
        </div>
        <div className="xs:mt-0 xs:min-h-[296px] mt-[20px] flex min-h-[208px] min-w-[312px] items-center rounded-[20px] lg:min-w-[313px] xl:min-w-[590px]">
          <picture className="">
            <source media="(min-width: 1440px)" srcSet={SocRepCat1440} />
            <source media="(min-width: 1024px)" srcSet={SocRepCat1024} />
            <source media="(min-width: 360px)" srcSet={SocRepCat360} />
            <img
              src={SocRepCat1440}
              alt="Котейка"
              className="h-auto w-full rounded-[20px]"
            />
          </picture>
        </div>
      </section>
      <section className="mb-[30px] flex flex-col items-start">
        <h2 className="mb-6 font-[Rubik] text-xl font-medium text-[#BEBEBE]">
          2. Благотворительность и помощь
        </h2>
        <p className="xs:text-lg font-[Rubik] text-base font-light text-[#BEBEBE]">
          Наши хвостатые друзья нуждаются в нашей помощи, и мы гордимся тем, что
          наша платформа способствует благотворительности. Создавайте
          мероприятия внутри платформы, собирайте единомышленников и вместе вы
          сможете реализовать задуманное, а также участвуйте в сборах в пользу
          приютов.
        </p>
      </section>
      <section className="xs:flex-row mb-[30px] flex flex-col items-center justify-between">
        <div className="xs:mr-[40px] flex flex-col">
          <h2 className="mb-6 font-[Rubik] text-xl font-medium text-[#BEBEBE]">
            3. Поиск пропавших лапок
          </h2>
          <p className="xs:text-lg font-[Rubik] text-base font-light text-[#BEBEBE]">
            Мы верим, что каждая потерянная лапка может быть найдена. Если вы
            увидели потеряшку на улице, сфотографируйте его и загрузите фото в
            приложение. Наша система автоматически найдет профиль потерянного
            питомца. Возможно, вы поможете вернуть домой потерянного друга.
          </p>
        </div>
        <div className="xs:mt-0 xs:min-h-[240px] mt-[20px] flex min-h-[208px] items-center rounded-[20px] lg:min-w-[313px] xl:min-w-[590px]">
          <picture className="">
            <source media="(min-width: 1440px)" srcSet={SocRepDog1_1440} />
            <source media="(min-width: 1024px)" srcSet={SocRepDog1_1024} />
            <source media="(min-width: 360px)" srcSet={SocRepDog1_360} />
            <img
              src={SocRepDog1_1440}
              alt="Пес первый"
              className="h-auto w-full rounded-[20px]"
            />
          </picture>
        </div>
      </section>
      <section className="mb-[30px] flex flex-col items-start">
        <h2 className="mb-6 font-[Rubik] text-xl font-medium text-[#BEBEBE]">
          4. Совместные прогулки и встречи
        </h2>
        <p className="xs:text-lg font-[Rubik] text-base font-light text-[#BEBEBE]">
          Организуйте совместные прогулки с другими участниками. Встречайтесь не
          прогулке, обменивайтесь опытом и дарите своим питомцам новых друзей.
          Ведь общение — это не только для нас, но и для наших пушистых
          спутников.
        </p>
      </section>
      <section className="xs:my-0 xs:flex-row mb-[100px] mt-[20px] flex flex-col items-center justify-between">
        <div className="xs:mr-[40px] mb-[30px] flex flex-col">
          <h2 className="mb-6 font-[Rubik] text-xl font-medium text-[#BEBEBE]">
            5. Любовь и забота
          </h2>
          <p className="xs:text-lg font-[Rubik] text-base font-light text-[#BEBEBE]">
            Мы верим, что наша платформа поможет укрепить связь между хозяевами
            и питомцами. Ведь они — часть нашей семьи, наши верные друзья.
            Давайте делать мир ярче и добрее вместе!
          </p>
        </div>
        <div className="xs:flex-row flex w-full flex-col items-center justify-between">
          <div className="xs:mb-0 xs:min-h-[252px] mb-[50px] flex min-h-[208px] items-center rounded-[20px] lg:min-w-[313px] xl:min-w-[590px]">
            <picture className="">
              <source media="(min-width: 1440px)" srcSet={SocRepDog2_1440} />
              <source media="(min-width: 1024px)" srcSet={SocRepDog2_1024} />
              <source media="(min-width: 360px)" srcSet={SocRepDog2_360} />
              <img
                src={SocRepDog2_1440}
                alt="Пес второй"
                className="h-auto w-full rounded-[20px]"
              />
            </picture>
          </div>
          <p className="text-center font-[Comfortaa] text-2xl font-semibold text-[#BEBEBE] lg:w-[426px]">
            Присоединяйтесь к нам, и давайте вместе создадим лучший мир для
            наших пушистых спутников! ❤️
          </p>
        </div>
      </section>
    </main>
  )
}
