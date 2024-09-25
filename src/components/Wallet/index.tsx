import React, { useState, useEffect } from "react";
import Web3 from "web3";
import { useTheme } from "../../context/ThemeContext";
import info from "../../assets/svg/button/info.svg";
import infoBlack from "../../assets/svg/button/infoBlack.svg";
import style from "./wallet.module.css";

export default function Wallet() {
  const { theme } = useTheme();
  const [walletAddress, setWalletAddress] = useState(""); // Для хранения адреса кошелька
  const [isMetamaskInstalled, setIsMetamaskInstalled] = useState(false); // Для проверки наличия Metamask

  // Проверка наличия Metamask и Web3 провайдера
  useEffect(() => {
    const ethereum = (window as any).ethereum; // Приведение типа
    if (ethereum) {
      setIsMetamaskInstalled(true); // Metamask установлен
    } else {
      setIsMetamaskInstalled(false); // Metamask не установлен
    }
  }, []);

  // Функция для подключения к Metamask
  const connectWallet = async () => {
    const ethereum = (window as any).ethereum; // Приведение типа
    if (ethereum) {
      const web3 = new Web3(ethereum); // Инициализация Web3 с провайдером Metamask
      try {
        // Запрос на подключение кошельков
        const accounts = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];

        // Сокращение адреса для отображения
        const shortAddress = `${address.slice(0, 7)}...${address.slice(-5)}`;
        setWalletAddress(shortAddress); // Устанавливаем сокращенный адрес в состояние
      } catch (error) {
        console.error("Ошибка подключения к Metamask:", error);
      }
    } else {
      // Если Metamask не установлен, перенаправляем на страницу скачивания
      window.open("https://metamask.io/download.html", "_blank");
    }
  };

  return (
    <div className={`${style.wallet__container}`}>
      <button
        type="button"
        onClick={connectWallet} // Добавляем вызов функции connectWallet по нажатию
        className="relative font-sans font-bold text-black-50 dark:text-white text-base xl:text-lg h-[47px] lg:h-[50px] xl:h-16 rounded-2xl w-[310px] flex items-center justify-center"
      >
        {walletAddress ? walletAddress : "Подключить кошелек"}
        <img className="ml-4" src={theme ? info : infoBlack} alt="info" />
      </button>
    </div>
  );
}
