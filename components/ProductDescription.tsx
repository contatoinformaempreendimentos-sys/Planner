import React from 'react';

const FeatureSection: React.FC<{ title: string; children: React.ReactNode; image?: string }> = ({ title, children, image }) => (
    <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <div className="text-gray-600 space-y-2">{children}</div>
        {image && <img src={image} alt={title} className="mt-4 rounded-lg shadow-sm w-full max-w-2xl mx-auto" />}
    </div>
);

export const ProductDescription: React.FC = () => {
    return (
        <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="prose max-w-none mx-auto text-gray-700">
                <p>❤️DICAS: Todos os produtos são autênticos, com patentes genuínas, a falsificação deve ser investigada! Clientes, por favor, identifiquem nossos produtos.</p>
                <img src="https://cdn.hotishop.com/image/1380ce52624f4aadfb2eac99cc24c96b60b874f3.jpeg" alt="" loading="lazy"/>
                <p><em><strong>💯</strong>Mais de 1 milhão de títulos para entrega imediata.</em><br/><em><img src="https://cdn.hotishop.com/assets/2020/12/c35c900fd9c6f7fc9f56a3910dc20425.gif" alt="" width="19" height="19" loading="lazy" /></em><em>&nbsp;ENVIO PARA TODO O MUNDO.</em><em><br/></em><em>⭐Garantia de reembolso rápido&gt;&gt; Reembolso parcial ou total depende da situação</em></p>
                <hr/>
                <p><strong>Você está se sentindo sobrecarregado(a) pela desordem? Lutando para manter suas tarefas domésticas em dia?</strong></p>
                <img src="https://cdn.hotishop.com/image/2713f4f513b02af10435a9cb61daefb92164c844.jpeg" alt="Espaço desorganizado" className="my-6 rounded-lg shadow-md w-full max-w-3xl mx-auto" loading="lazy"/>
                <p><strong>💡 Nós entendemos! Limpar e organizar pode parecer uma tarefa sem fim, especialmente quando as distrações estão constantemente te desviando.</strong></p>
                <p><strong>É por isso que criamos este Kit de Ferramentas de Limpeza e Organização—projetado para ajudar você a simplificar, otimizar e manter a manutenção da sua casa, mesmo com uma mente ocupada.</strong></p>
                
                <h3 className="text-xl font-bold text-gray-800 mt-10 mb-4"><strong>O que está incluído:</strong></h3>
                
                <FeatureSection title="Listas de Verificação de Limpeza Semanais, Mensais e Anuais" image="https://cdn.hotishop.com/image/c0b4d0901f8205f6daa68ae07da310d9363755c3.jpeg">
                    <p>✔️ Mantenha-se organizado(a) e sua casa limpa com listas fáceis de seguir que dividem as tarefas em partes gerenciáveis.</p>
                    <p>✔️ Listas semanais, mensais e anuais projetadas para ajudar você a se manter no caminho certo sem se sentir sobrecarregado(a).</p>
                </FeatureSection>

                <FeatureSection title="Cronograma de Limpeza Doméstico Personalizado" image="https://cdn.hotishop.com/image/3298acca218ac46e67b4653b7b7bb03eb300b09b.jpeg">
                    <p>✔️ Crie uma rotina de limpeza que se adapte ao seu ritmo e estilo.</p>
                    <p>✔️ Sinta uma sensação de realização toda vez que marcar uma tarefa e diga adeus à desordem mental.</p>
                </FeatureSection>

                <FeatureSection title="Dicas de Organização para Mentes com TDAH" image="https://cdn.hotishop.com/image/4095657725e9a68613950884756b72f74911a5a4.jpeg">
                    <p>✔️ Dicas e truques práticos que se alinham com as funções cerebrais do TDAH—chega de soluções "tamanho único".</p>
                    <p>✔️ Conselhos simples e acionáveis para ajudar você a se organizar de maneiras que funcionem&nbsp;<em>para você</em>.</p>
                </FeatureSection>
                
                <FeatureSection title="Planejador de Tarefas">
                  <p>✔️ Obtenha um layout visual para planejar, priorizar e enfrentar as tarefas de uma maneira não intimidadora.</p>
                  <p>✔️ Acompanhe seu progresso e ajuste sua agenda sem culpa ou estresse.</p>
                </FeatureSection>

                <h3 className="text-xl font-bold text-gray-800 mt-10 mb-4"><strong>Como Funciona:</strong></h3>
                <p><strong>Comece com as Listas de Verificação Semanais:</strong> Crie seu plano de limpeza semanal, definindo metas realistas para o dia.</p>
                <p><strong>Passe para as Tarefas Mensais:</strong> Realize tarefas mais profundas que não precisam ser feitas toda semana, mas ainda precisam de atenção (pense: limpeza da geladeira ou organização daquele armário).</p>
                <p><strong>Check-ups Anuais:</strong> Fique à frente de tarefas de longo prazo, como limpeza da garagem ou organização profunda. Planeje suas tarefas anuais para que não te peguem de surpresa.</p>
                <p><strong>Use o Planejador de Tarefas:</strong> Mapeie quais tarefas priorizar e acompanhe seu progresso com uma sensação de realização.</p>


                <div className="my-10 p-6 bg-gray-50 rounded-lg border-l-4 border-gray-200">
                    <h3 className="text-xl font-bold text-gray-800">Por que este kit funcionará para você:</h3>
                    <ul className="mt-4 space-y-3 list-none">
                        <li><strong>✨ Menos Estresse, Mais Estrutura:</strong> Nosso kit divide as tarefas em passos pequenos e alcançáveis—perfeito para mentes que prosperam com estrutura, mas lutam para seguir em frente.</li>
                        <li><strong>✨ Aumente sua Confiança:</strong> Chega de se sentir paralisado(a) pela desordem ou por tarefas que você não consegue enfrentar. Com metas e rotinas claras, você se sentirá motivado(a) e empoderado(a).</li>
                        <li><strong>✨ Economize Tempo e Energia:</strong> Com cronogramas e dicas fáceis de seguir, você passará menos tempo se preocupando com a limpeza e mais tempo aproveitando seu espaço.</li>
                    </ul>
                </div>
                
                <img src="https://cdn.hotishop.com/image/29a24b0aa1afccf088a722a1ab9a4f390327bc7a.jpeg" alt="" loading="lazy" />

                <div>
                    <p><strong>TAMANHO:</strong> 28.5 * 22cm</p>
                    <p><strong>Número de páginas:</strong> 74</p>
                    <h3 className="font-bold mt-4">PACOTE:</h3>
                    <ul>
                        <li>1* Kit de Ferramentas de Limpeza e Organização</li>
                    </ul>
                </div>

                <div className="text-center mt-8">
                    <h2 className="font-bold text-lg">⚡️O estoque vende rápido!⚡️</h2>
                    <p className="font-bold mt-2">Clique em "ADICIONAR AO CARRINHO" para garantir o seu agora!</p>
                    <img src="https://cdn.hotishop.com/image/b9b8eba80ba0696afbdc71a7b9a218b1d6fcbc40.gif" alt="" className="mx-auto my-4" width="500" height="140" loading="lazy" />
                </div>
                
                <hr/>

                <div className='text-left'>
                  <h4 className='font-bold'>Certificação</h4>
                  <img src="https://cdn.hotishop.com/image/2022/06/7b25623fea81713ce085cf794249fb77c44b7f79257b3189c8838bc081984a28.png" alt="" loading="lazy"/>

                  <h3 className='font-bold mt-4'>POR QUE NÓS?</h3>
                  <ul>
                    <li>Trabalhamos diretamente com fabricantes de todo o mundo para garantir a melhor qualidade de nossos produtos. Temos um departamento de Controle de Qualidade que nos ajuda a manter nossa promessa!</li>
                    <li>O preço é sempre competitivo.</li>
                    <li>Atendimento ao Cliente Incrível</li>
                    <li>Produtos incríveis junto com Alta Qualidade</li>
                    <li>Leia as avaliações de nossos adoráveis clientes</li>
                  </ul>
                  <hr/>

                  <h3 className='font-bold mt-4'>NOSSA GARANTIA</h3>
                  <p>📩 Acesso Digital Imediato: Você receberá o produto adquirido imediatamente após a compra, nada de esperas.</p>
                  <p>💬 Suporte ao Cliente 24/7: Nossa equipe está sempre pronta para ajudar, respondemos todas as mensagens em até 24 horas, todos os dias da semana.</p>
                  <p>🔒 Pagamento 100% Seguro: Utilizamos criptografia SSL Secure de última geração para proteger suas informações pessoais e financeiras durante toda a compra.</p>
                  <p>✅ Compra Sem Riscos: Se o produto não for o que você esperava, entre em contato conosco, oferecemos reembolso garantido dentro de 7 dias. Processo simples, rápido, totalmente seguro e sem perguntas.</p>
                  <img src="https://i.ibb.co/tBSg2L4/garantia-7-dias.png" alt="Garantia de 7 dias" className="mx-auto my-6 w-40 h-40" />
                </div>
            </div>
        </div>
    );
};