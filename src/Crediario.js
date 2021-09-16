import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    fontSize: '10px',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  divider: {
    marginTop: 10,
  },
})

// Create Document Component
const Crediario = ({ nome }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.title}>
          CONTRATO DE COMPRA, VENDA E FINANCIAMENTO DE MERCADORIAS COM RESERVA
          DE DOMINIO E TERMO DE CONSENTIMENTO DE TRATAMENTO DE DADOS PESSOAIS
        </Text>
        <View style={styles.divider}></View>
        <Text>
          Pelo presente instrumento ora pactuado de um lado por Casa América
          LTDA, sociedade regularmente constituída e doravante denominada
          VENDEDORA e de outro lado ELAINE CRISTINA DE ANDRADE, portador do RG
          nº MG 13339067 CPF nº 060.206.046-08 ,Solteiro exercendo a profissao
          de CAIXA , residente a RUA MODESTO TORINO, nº 23, , BEIRA RIO -
          PIRANGUINHO/MG doravante denominado COMPRADOR estabelecem entre si.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          DEFINIÇÕES : O contrato ora pactuado rege a compra/venda e o
          financiamento dos produtos de propriedade da VENDEDORA e de acordo com
          as condições que seguem no item terceiro deste contrato. Todas as
          condições de parcelamento, tais como, numero de parcelas permitidas,
          juros das parcelas, multa, juros de atraso, análise de crédito e
          outros que fazem parte integrante deste contrato, estarão disponíveis
          nos estabelecimentos da VENDEDORA em local visível. Este contrato
          possui uma assinatura eletrônica que será usada para comparar com
          todas as compras futuras a serem realizadas pelo COMPRADOR,
          esclarecendo que a assinatura digital é um dado pessoal para efeitos
          da Lei Geral de proteção de Dados, e que receberá o devido tratamento.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          ANÁLISE DE CRÉDITO: A análise de crédito e limete será realizada de
          acordo com critérios internos da VENDEDORA podendo ser alterado a
          qualquer momento sem prévio aviso ao COMPRADOR. Ao final desta análise
          a VENDEDORA poderá ou não conceder um limite de crédito ao COMPRADOR
          para compras financiadas garantindo o direito de RESERVA DE DOMINIO
          até que o produto esteja completamente quitado. A VENDEDORA não tem
          obrigação de esclarecer ao COMPRADOR o motivo da não liberação do
          limite para compras, por se tratarem de analises internas e
          confidenciais.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          CONDIÇÕES A VENDEDORA se reserva o direito de definir a qualquer
          momento o numero de parcelas que irá conceder ao COMPRADOR sobre suas
          compras, podendo variar por valor, numero de compras e de acordo com a
          analise de crédito que será realizada a qualquer tempo. O valor das
          prestações deverão ser pago em qualquer loja Casa América LTDA, porem
          assiste-lhe o direito de receber eventual valor vencido por intermédio
          de cobrador devidamente identificado ou procuradores. A falta de aviso
          de vencimento não desonera a obrigação do COMPRADOR de pagar até a
          data ajustada o valor das prestações. As partes ajustam a cláusula de
          RESERVA DE DOMÍNIO do objeto deste contrato a favor da VENDEDORA até
          que o COMPRADOR pague a última prestação, saldando o total do preço
          objeto do financiamento ajustado. O valor devido pelo COMPRADOR a
          VENDEDORA poderá ser representado por uma única nota promissória e/ou
          duplicata de vencimento contra apresentação, mas que deverá ser
          amortizada e quitada pelo COMPRADOR de acordo com as prestações
          estabelecidas a cada compra com a VENDEDORA. As partes ajustam que os
          títulos representativos das prestações podem constituir objeto de
          comércio ou garantia e caso o COMPRADOR pague as prestações com
          cheque, autoriza o endosso aos bancos e empresas especializadas, que
          passam a ser titulares do direito e obrigação sobre os mesmos,
          resaltando que não são permitidos pagamentos de parcela de crediário
          por cartão de crédito ou debito. Os pagamentos em cheque e cartões de
          crédito só serão validos após a sua compensação. O não pagamento de
          qualquer das parcelas por um período igual ou superior a 30 dias
          ocasionará o vencimento antecipado das parcelas a vencer. A VENDEDORA
          se reserva o direito de NÃO aceitar cheques de terceiro para pagamento
          de prestações e/ou compras realizadas em seu estabelecimento, porém,
          se uma vez aceito, desde já o COMPRADOR portador do cheque de terceiro
          se torna fiel depositário e avalista do cheque em questão e sua compra
          ou prestação será considerada quitada após a compensação do mesmo.
          Todos os cheques estarão sujeitos a prévia análise de crédito e a
          VENDEDORA se reserva o direito de NÃO informar ao CLIENTE o motivo de
          aceitar ou não o cheque em questão. A VENDEDORA fica autorizada desde
          já a consultar as fontes e arquivos cadastrais prórpios ou de
          terceiros inclusive órgãos de proteção ao crédito tais como SPC, CDL,
          Serasa ou similar, empresas de cadastro de cheques sem fundo,
          cartórios de protesto. O COMPRADOR como titular ou fiador declara-se
          ciente que o atraso no pagamento das prestações, no vencimento,
          ensejará medidas por parte da VENDEDORA, de protesto de crédito e pelo
          presente AUTORIZA O USO DO CADASTRO PESSOA FISICA junto aos CDL, SPC,
          SERASA e órgãos de proteção ao crédito na forma da legislação.
          Qualquer mudança cadastral é de responsabilidade do COMPRADOR informar
          a VENDEDORA. Fica desde já consignado que o titular do cadastro
          passará a figurar como FIADOR, sendo co-devedor solidário sobre
          qualquer autorizado no seu cadastro. Se por ventura, houver
          inadimplemento do autorizado e do titular, ambos estarão sujeitos a
          inclusão ao serviço de proteção ao crédito, bem como aos demais meios
          legais para a quitação do débito. Qualquer autorizado na ficha do
          titular estará sujeito a este contrato, alem de um aditivo de
          autorização permanente ou provisória. Após a quitação de parcelas
          atrasadas uma vez que o COMPRADOR já está registrado em órgãos de
          defesa do consumidor, o COMPRADOR fica OBRIGADO a solicitar por
          escrito a baixa deste registro anexando o comprovante de pagamento
          e/ou negociação da dívida junto a VENDEDORA. A VENDEDORA tem um prazo
          de até 15 dias para retirar o nome do COMPRADOR junto aos órgãos de
          defesa do consumidor, após a quitação da dívida.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          MULTAS E JUROS Todos os parcelamentos de 2 ou mais vezes realizados
          nos estabelecimentos da VENDEDORA estarão sujeitos a acréscimo de
          acordo com as informações disponíveis nos estabelecimentos em local
          visível. O não pagamento das parcelas nos prazos estipulados
          acarretarão em juros de null ao dia, multas e a inclusão do nome em
          órgãos de proteção ao crédito. MULTAS E JUROS Todos os parcelamentos
          de 2 ou mais vezes realizados nos estabelecimentos da VENDEDORA
          estarão sujeitos a acréscimo de acordo com as informações disponíveis
          nos estabelecimentos em local visível. O não pagamento das parcelas
          nos prazos estipulados acarretarão em juros de null ao dia, multas e a
          inclusão do nome em órgãos de proteção ao crédito.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          TROCA E DEVOLUÇÕES Todas as trocas de mercadorias ocorrerão por
          imposição legal nos termos do Codigo de defesa do Consumidor, e
          poderão tambem ser realizadas por mera DELIBERALIDADE da VENDEDORA em
          um período de null dias após a compra, podem estas trocas tem
          obrigatoriamente que sem realizadas por produtos de igual ou maior
          valor que o anterior. A VENDEDORA NÃO devolve dinheiro para trocas
          e/ou devoluções que não estejam amparadas pelo código de defesa do
          consumidor Só serão aceitas devoluções de mercadorias em caso de
          avaria e depois de um parecer técnico do fornecedor dentro dos prazos
          previstos em lei.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          VINCULAÇÃO As assinaturas das compras realizadas pelo COMPRADOR serão
          feitas através de um equipamento eletrônico e assinado eletronicamente
          com mesas digitalizadoras.
        </Text>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <Text>TERMO DE CONSENTIMENTO</Text>
        <Text>
          VINCULAÇÃO As assinaturas das compras realizadas pelo COMPRADOR serão
          feitas através de um equipamento eletrônico e assinado eletronicamente
          com mesas digitalizadoras.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          {`Em observância a lei 13709/18 LEI GERAL DE PROTEÇÃO DE ADOS PESSOAIS e demais normativas aplicáveis sobre proteção de dados pessoais, manifesto-me de forma informada, livre expressa e consciente, no sentido de autorizar a CASA AMERICA A realizar o tratamento de meus Dados pessoais para as finalidades e de acordo com as condições estabelecida.
FINALIDADE DE TRATAMENTO
•	Os meus dados pessoais poderão ser utilizados pela casa américa para:
•	Abertura de crediário, para crédito próprio de compras no estabelecimento.
•	Cobrança de parcelas vencidas 
•	Inclusão no SPC, e Serasa caso necessário
•	Entrega de mercadoria 
•	Envio de mensagem informativa de promoções via telefone
•	Realizar procedimento de trocas nos termos do CDC
•	Realizar pesquisa de interesse de mercado
Estou ciente que a casa américa poderá compartilhar meus dados pessoais com parceiros e prestadores de serviços, restringindo-se as funções e atividades por cada uma desempenhada e em aderência a finalidade acima estabelecidas.
Estou ciente que a casa américa poderá tomar decisões automatizadas com base nos meus dados pessoais sendo garantido a mim o direito de solicitar, por meio de e-mail ou telefone a revisão das decisões.`}
        </Text>
        <View style={styles.divider}></View>
        <Text>
          CONFIDENCIALIDADE Estou ciente do compromisso assumido pela casa
          américa de tratar meus dados pessoais deforma sigilosa e confidencial,
          mantendo-os em ambiente seguro e não sendo utilizado para qualquer fim
          que não os descritos acima.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          COMPARTILHAMENTO Estou ciente de que a casa américa poderá
          compartilhar meus dados pessoais havendo para adequada prestação de
          serviço, proteção em caso de conflito mediante decisão judicial ou
          requisição de autoridade competente, podendo os dados serem
          compartilhados com os seguintes parceiros: Banco de dados da
          Associação comercial de Itajubá/SERASA, Câmera dos Dirigentes
          Legistas/ SCPS, empresas terceirizadas de entrega de mercadoria.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          REVOGAÇAO Estou ciente de que os meus dados pessoais ficaram
          armazenados na casa américa enquanto for do meu interesse podendo
          qualquer tempo retirar o consentimento ora fornecido, hipótese em que
          as atividades desenvolvidas pela casa américa, no âmbito de nossa
          relação poderão ficar prejudicadas, Declaro e concordo que os meus
          dados pessoais poderão ser armazenados mesmo após o término do
          tratamento, inclusive após a revogação do consentimento, para o
          cumprimento de obrigação legal ou regulatória pela casa américa.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          CANAL DE ATENDIMENTO E COMUNICAÇÃO Estou ciente que posso utilizar os
          canais de atendimento da casa américa para tirar dúvidas e ou realizar
          a solicitação relacionadas ao tratamento dos meus dados pessoais.
          Email Telefone
        </Text>
        <View style={styles.divider}></View>
        <Text>
          Nessa oportunidade manifesto-me de forma livre e expressa e consciente
          no sentido de autorizar a casa américa a realizar contato comigo
          através das informações prestadas nesse contrato.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          Eu, ELAINE CRISTINA DE ANDRADE declaro que as informações foram
          prestadas espontaneamente quando da abertura do crediário são
          verídicas sob pena da lei, e assim assino manualmente e
          eletronicamente este contrato na presença de 2 testemunhas. Informo
          também estar ciente que todas as minhas futuras compras terão como
          comprovação uma assinatura eletrônica e dispenso a VENDEDORA da
          obrigatoriedade da assinatura manual em cada compra.
        </Text>
        <View style={styles.divider}></View>
        <Text>
          Para dirimir quaisquer dúvidas oriundas da execução deste contrato,
          fica eleito o foro da Comarca de Itajubá, com renúncia de qualquer
          outro, por mais privilegiado que seja ou venha a se tornar.
        </Text>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <Text>Itajubá, 2 de Agosto de 2021</Text>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View>
            <Text>______________________________________</Text>
            <View style={{ marginBottom: 5 }}></View>
            <Text>Assinatura Eletrônica</Text>
            <View style={{ marginBottom: 5 }}></View>
            <Text>ELAINE CRISTINA DE ANDRADE</Text>
          </View>
          <View style={{ marginRight: 50 }}></View>
          <View>
            <Text>______________________________________</Text>
            <View style={{ marginBottom: 5 }}></View>
            <Text>ELAINE CRISTINA DE ANDRADE</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View>
            <Text>______________________________________</Text>
            <View style={{ marginBottom: 5 }}></View>
            <Text>1º Testemunha</Text>
          </View>
          <View style={{ marginRight: 50 }}></View>
          <View>
            <Text>______________________________________</Text>
            <View style={{ marginBottom: 5 }}></View>
            <Text>2º Testemunha</Text>
          </View>
        </View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View style={styles.divider}></View>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View>
            <Text>______________________________________</Text>
            <View style={{ marginBottom: 5 }}></View>
            <Text>1º Avalista</Text>
          </View>
          <View style={{ marginRight: 50 }}></View>
          <View>
            <Text>______________________________________</Text>
            <View style={{ marginBottom: 5 }}></View>
            <Text>2º Avalista</Text>
          </View>
        </View>
      </View>
    </Page>
  </Document>
)

export default Crediario
