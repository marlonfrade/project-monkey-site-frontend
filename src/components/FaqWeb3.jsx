import { useState } from "react";

import MotionComponent from "./MotionComponent";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm z-50">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 dark:text-gray-300 transition-transform duration-200 z-50 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen ? (
        <div className="p-4 pt-0 z-50">
          <p className="text-gray-700 dark:text-gray-300 z-50">{children}</p>
        </div>
      ) : null}
    </div>
  );
};

export default function FaqWeb3() {
  return (
    <div
      id="faq"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <MotionComponent>
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-16 sm:text-center">
            <a href="/" className="mb-6 sm:mx-auto">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500">
                <svg
                  className="w-10 h-10 text-white"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </a>
            <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 via-red-500 to-purple-500 sm:text-4xl md:mx-auto">
                A WEB3, transparente e descentralizada.
              </h2>
              <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
                Veja as principais d??vidas sobre a WEB3 abaixo.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <Item title="O que ?? a web3?">
              A web3 ?? uma evolu????o da internet que usamos atualmente e seu
              conceito foi citado pelo engenheiro brit??nico Gavin Wood,
              co-fundador da criptomoeda Ethereum. Trata-se de uma rede
              totalmente transparente e descentralizada, com base na
              intelig??ncia artificial e tecnologia blockchain.
            </Item>
            <Item title="Metaverso e digitaliza????o?">
              O metaverso ?? a vers??o tridimensional da internet, com a realidade
              virtual j?? adotada em diversas empresas de tecnologia. Dessa
              forma, uma das caracter??sticas mais inovadoras da web3 ?? que est??
              diretamente relacionada com o metaverso e promete unir o mundo
              real ao virtual.
            </Item>
            <Item title="Privacidade dos dados pessoais?">
              Os mecanismos que est??o sendo desenvolvidos para a web3 fortalecem
              ainda mais o bloqueio a rastreadores e monitoramento das
              atividades em meio virtual. Dessa forma, tem a caracter??stica de
              proporcionar mais privacidade nos dados pessoais, evitando crimes
              e uso de dados pelas big techs.
            </Item>
            <Item title="Tecnologia blockchain?">
              A tecnologia blockchain ?? uma das maiores caracter??sticas da web3
              e tem um papel essencial na nova rede de internet. ?? uma
              modernidade que permite a cria????o de blocos para o tr??nsito de
              dados de modo totalmente seguro, independente e an??nimo.
            </Item>
            <Item title="Descentraliza????o de dados?">
              Por fim, outra caracter??stica relevante da web3 ?? a
              descentraliza????o dos dados, fator que proporciona maior autonomia
              aos usu??rios. Sendo assim, ?? poss??vel ter mais liberdade para
              lidar com conte??dos e informa????es pessoais, sem depender das big
              techs.
            </Item>
            <Item title="Qual ?? o papel do NFT na web3?">
              Os Non-fungible Tokens ??? NFTs ganharam destaque nos ??ltimos anos.
              Eles s??o certificados digitais que determinam a propriedade ??nica
              e exclusiva de bens virtuais. Sendo assim, s??o itens que
              contribuem para definir a propriedade na internet. Diante disso,
              com a otimiza????o e consolida????o da web3, os NFTs prometem ganhar
              ainda mais espa??o no mercado. Isso por ser uma nova era da
              internet e que oferece autonomia, seguran??a e descentraliza????o,
              al??m de melhores condi????es para a comercializa????o dos NFTs.
            </Item>
          </div>
        </div>
      </MotionComponent>
    </div>
  );
}
