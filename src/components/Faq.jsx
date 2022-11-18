import { useState } from "react";

import MotionComponent from "./MotionComponent";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 dark:text-gray-300 transition-transform duration-200 ${
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
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700 dark:text-gray-300">{children}</p>
        </div>
      )}
    </div>
  );
};

export default function Faq() {
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
                  className="w-10 h-10 text-gray-300"
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
                Veja as principais dúvidas sobre a WEB3 abaixo.
              </p>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <Item title="O que é a web3?">
              A web3 é uma evolução da internet que usamos atualmente e seu
              conceito foi citado pelo engenheiro britânico Gavin Wood,
              co-fundador da criptomoeda Ethereum. Trata-se de uma rede
              totalmente transparente e descentralizada, com base na
              inteligência artificial e tecnologia blockchain.
            </Item>
            <Item title="Metaverso e digitalização?">
              O metaverso é a versão tridimensional da internet, com a realidade
              virtual já adotada em diversas empresas de tecnologia. Dessa
              forma, uma das características mais inovadoras da web3 é que está
              diretamente relacionada com o metaverso e promete unir o mundo
              real ao virtual.
            </Item>
            <Item title="Privacidade dos dados pessoais?">
              Os mecanismos que estão sendo desenvolvidos para a web3 fortalecem
              ainda mais o bloqueio a rastreadores e monitoramento das
              atividades em meio virtual. Dessa forma, tem a característica de
              proporcionar mais privacidade nos dados pessoais, evitando crimes
              e uso de dados pelas big techs.
            </Item>
            <Item title="Tecnologia blockchain?">
              A tecnologia blockchain é uma das maiores características da web3
              e tem um papel essencial na nova rede de internet. É uma
              modernidade que permite a criação de blocos para o trânsito de
              dados de modo totalmente seguro, independente e anônimo.
            </Item>
            <Item title="Descentralização de dados?">
              Por fim, outra característica relevante da web3 é a
              descentralização dos dados, fator que proporciona maior autonomia
              aos usuários. Sendo assim, é possível ter mais liberdade para
              lidar com conteúdos e informações pessoais, sem depender das big
              techs.
            </Item>
            <Item title="Qual é o papel do NFT na web3?">
              Os Non-fungible Tokens – NFTs ganharam destaque nos últimos anos.
              Eles são certificados digitais que determinam a propriedade única
              e exclusiva de bens virtuais. Sendo assim, são itens que
              contribuem para definir a propriedade na internet. Diante disso,
              com a otimização e consolidação da web3, os NFTs prometem ganhar
              ainda mais espaço no mercado. Isso por ser uma nova era da
              internet e que oferece autonomia, segurança e descentralização,
              além de melhores condições para a comercialização dos NFTs.
            </Item>
          </div>
        </div>
      </MotionComponent>
    </div>
  );
}
