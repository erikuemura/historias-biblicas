export interface Scene {
  title: string
  text: string
  imageUrl?: string
}

export interface Story {
  slug: string
  title: string
  subtitle: string
  description: string
  readingTime: string
  ageRange: string
  emoji: string
  gradient: string
  bgColor: string
  accentColor: string
  bibleReference: string
  moralLesson: string
  scenes: Scene[]
  imageUrl?: string
  testament: "velho" | "novo"
}

export const stories: Story[] = [
  {
    imageUrl: "/images/historias/criacao-do-mundo.svg",
    slug: "criacao-do-mundo",
    title: "A Criação do Mundo",
    subtitle: "Como tudo começou",
    description:
      "No princípio, Deus criou o céu e a terra em seis dias maravilhosos. Descubra como a luz, o mar, as plantas, os animais e as pessoas foram feitos com muito amor!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "🌍",
    gradient: "from-blue-400 via-teal-400 to-green-400",
    bgColor: "bg-blue-50",
    accentColor: "text-teal-700",
    bibleReference: "Gênesis 1–2",
    testament: "velho",
    moralLesson:
      "Deus fez um mundo lindo cheio de amor. Tudo o que Ele criou é bom — inclusive você!",
    scenes: [
      {
        title: "Antes de Tudo...",
        imageUrl: "/images/historias/criacao-do-mundo-cena-1.svg",
        text: `Era uma vez... antes de qualquer coisa existir.

Não havia sol, não havia estrelas, não havia árvores nem animais. Não havia nada além de escuridão e silêncio.

Mas Deus estava lá. E Deus tinha um plano muito especial.

— Vou criar um lugar lindo! — disse Deus com alegria.

E assim começou a maior aventura de todos os tempos: a criação do nosso maravilhoso mundo!`,
      },
      {
        title: "O Primeiro Dia: Vamos ter Luz!",
        imageUrl: "/images/historias/criacao-do-mundo-cena-2.svg",
        text: `Deus olhou para a escuridão e disse com voz firme e cheia de amor:

— Que haja luz!

E de repente... FLASH! Uma luz brilhante encheu tudo! Era quente, era dourada, era linda!

Deus viu que a luz era boa e sorriu.

— Isso sim é lindo! — disse Ele.

Deus chamou a luz de "dia" e a escuridão de "noite". E aquele foi o primeiro dia.`,
      },
      {
        title: "O Mar e a Terra",
        imageUrl: "/images/historias/criacao-do-mundo-cena-3.svg",
        text: `Nos dias seguintes, Deus continuou trabalhando com muito carinho.

Ele separou as águas e criou um céu azul lá em cima, cheio de nuvens brancas e fofas que pareciam algodão.

Depois Deus juntou as águas e fez os mares profundos e azuis. E onde não havia água, surgiu a terra firme com montanhas, vales e planícies.

— Agora vamos enfeitar! — disse Deus animado.

E da terra nasceram grama verdinha, flores de todas as cores, árvores altas com frutas gostosas e flores perfumadas que dançavam no vento.

O mundo estava ficando cada vez mais bonito!`,
      },
      {
        title: "O Sol, a Lua e as Estrelinhas",
        imageUrl: "/images/historias/criacao-do-mundo-cena-4.svg",
        text: `Deus colocou o sol brilhante no céu para iluminar os dias e esquentar tudo com carinho. Criou também a lua prateada e milhares de estrelinhas que piscavam à noite, como luzinhas de festa no céu.

Então Deus encheu os mares de peixes coloridos, golfinhos saltitantes e baleias enormes que cantavam felizes.

No céu apareceram pássaros de todas as cores voando livre e alegres, chirpiando músicas bonitas.

E na terra? Leões, elefantes, girafas, borboletas, cachorros, gatos e tantos outros animais surgiram, todos correndo, pulando e brincando!

Deus olhou para tudo isso e disse:

— Que lindo! Está ficando perfeito!`,
      },
      {
        title: "A Criatura Mais Especial",
        imageUrl: "/images/historias/criacao-do-mundo-cena-5.svg",
        text: `No sexto dia, Deus fez algo muito especial. Ele pegou um pouco de terra com as mãos e fez uma pessoa — o primeiro homem, chamado Adão.

Deus soprou com cuidado e o homem ganhou vida! Adão abriu os olhos e viu o mundo maravilhoso ao redor.

— Uau! — disse Adão encantado, olhando para as flores, os animais e o céu azul.

Depois Deus criou Eva, a primeira mulher, para ser companheira de Adão. Os dois ficaram muito felizes no jardim mais bonito do mundo, o Jardim do Éden.

Deus deu para eles um trabalho muito gostoso: cuidar do jardim e de todos os animais.

No sétimo dia, Deus descansou, muito satisfeito com tudo que havia criado.

E o mais importante de tudo? Você também faz parte dessa criação linda. Deus te fez com muito amor!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/noe-e-a-grande-arca.svg",
    slug: "noe-e-a-grande-arca",
    title: "Noé e a Grande Arca",
    subtitle: "A história do homem, os animais e o arco-íris",
    description:
      "Noé era um homem muito bom e obediente. Quando Deus pediu para ele construir um barco gigante, ele obedeceu — e salvou sua família e todos os animais!",
    readingTime: "9 min",
    ageRange: "3–8 anos",
    emoji: "🚢",
    gradient: "from-indigo-400 via-blue-400 to-cyan-400",
    bgColor: "bg-indigo-50",
    accentColor: "text-indigo-700",
    bibleReference: "Gênesis 6–9",
    testament: "velho",
    moralLesson:
      "Quando obedecemos a Deus e confiamos Nele, mesmo as situações mais difíceis têm um final lindo — como um arco-íris!",
    scenes: [
      {
        title: "Noé, o Homem Bom",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-1.svg",
        text: `Há muitos e muitos anos, havia um homem chamado Noé. Ele tinha cabelos brancos e uma barba grande e cheia.

Noé era diferente de todos ao redor. Enquanto as outras pessoas só pensavam em coisas ruins, Noé amava a Deus de todo o coração. Ele era bondoso, honesto e cuidava bem da sua família.

Noé tinha três filhos: Sem, Cam e Jafé, e cada um tinha a sua esposa.

Todos os dias, Noé conversava com Deus, e isso deixava seu coração quentinho e tranquilo.`,
      },
      {
        title: "Deus Tem um Grande Plano",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-2.svg",
        text: `Um dia, Deus falou com Noé:

— Noé, meu amigo, preciso te contar algo importante. Vou mandar uma grande chuva que vai cobrir toda a terra. Mas você e sua família estão protegidos, porque você me obedece.

Noé escutou com atenção.

— Quero que você construa uma arca — uma grande embarcação de madeira. E quando ela estiver pronta, coloque dentro a sua família e um casal de cada animal que existe!

Noé ficou olhando para o céu azul sem nenhuma nuvem. Construir um barco enorme? Com todos os animais? Parecia impossível!

Mas Noé confiou em Deus e disse:

— Tudo bem, Senhor. Farei tudo como você mandou!`,
      },
      {
        title: "Construindo a Arca",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-3.svg",
        text: `E assim começou o maior projeto de construção que o mundo já viu!

Noé e seus filhos trabalharam dia após dia, martelando, serrando e pregando as tábuas de madeira. A arca era ENORME — mais longa do que um campo de futebol!

Os vizinhos passavam e riam:

— Hahaha! Olha o Noé fazendo um barco no meio do campo! Que tolice!

Mas Noé não ligava. Ele continuava trabalhando, cantando e sorrindo.

— Não me importo com as gozações. Eu confio em Deus! — dizia ele.

Depois de muito tempo de trabalho, a arca ficou pronta. Era linda, resistente e cheirava a madeira fresca!`,
      },
      {
        title: "Os Animais Chegando",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-4.svg",
        text: `Então aconteceu algo incrível!

Os animais começaram a chegar de todos os lados — dois a dois, um machinho e uma feminha de cada espécie.

Girafa e girafa, elefante e elefante, leão e leoa, urso e ursa, coelho e coelha, borboleta e borboleta...

Eram tantos animais que parecia um desfile! Noé e seus filhos olhavam boquiabertos para aquela fila interminável.

Os animais entraram na arca calmamente, como se soubessem exatamente o que fazer. Era como se Deus estivesse guiando cada um deles.

Depois de todos entrarem, Deus fechou a porta da arca com um barulho suave.

E então começou a chover...`,
      },
      {
        title: "O Arco-Íris da Promessa",
        imageUrl: "/images/historias/noe-e-a-grande-arca-cena-5.svg",
        text: `A chuva caiu por quarenta dias e quarenta noites, sem parar. As águas subiram, subiram e cobriram tudo.

Mas dentro da arca, Noé, sua família e todos os animais estavam seguros e quentinhos. Às vezes o navio balançava, mas Deus cuidava de todos.

Por fim, a chuva parou. As águas foram baixando pouquinho a pouco...

A arca encostou em uma montanha. Noé soltou um pombo que voltou carregando um galho de oliveira no bico — sinal de que havia terra seca!

Quando saíram da arca, o sol brilhava forte e o cheiro de terra molhada era gostoso.

Então Deus disse:

— Olha para o céu, Noé!

E lá estava: um arco-íris imenso e colorido — vermelho, laranja, amarelo, verde, azul e violeta — cruzando o céu de ponta a ponta.

— Este arco-íris é minha promessa para você e para todos os seus filhos — disse Deus com carinho. — Nunca mais vou cobrir toda a terra com água. Toda vez que vocês virem o arco-íris, lembrem-se de que eu os amo!

E Noé e sua família abraçaram uns aos outros, cheios de alegria e gratidão.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jose-e-o-casaco-colorido.svg",
    slug: "jose-e-o-casaco-colorido",
    title: "José e o Casaco Colorido",
    subtitle: "A história do sonhador que nunca desistiu",
    description:
      "José era o filho favorito de seu pai Jacó, que lhe deu um casaco de muitas cores. Mas a inveja dos irmãos mudou tudo — até Deus transformar a tristeza em alegria!",
    readingTime: "10 min",
    ageRange: "4–8 anos",
    emoji: "🌈",
    gradient: "from-orange-400 via-yellow-400 to-amber-400",
    bgColor: "bg-orange-50",
    accentColor: "text-orange-700",
    bibleReference: "Gênesis 37–45",
    testament: "velho",
    moralLesson:
      "Mesmo quando as coisas parecem muito tristes, Deus tem um plano lindo. Nunca desista!",
    scenes: [
      {
        title: "A Família de Jacó",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-1.svg",
        text: `Havia uma vez um homem chamado Jacó que tinha doze filhos. Era uma família grande e barulhenta, cheia de histórias e aventuras!

O filho favorito de Jacó era o jovem José, um rapaz de cabelos escuros e olhos brilhantes que adorava sonhar.

José tinha um talento muito especial: ele conseguia entender o que os sonhos significavam!

Às vezes, à noite, enquanto dormia, Deus lhe mostrava imagens e mensagens em seus sonhos.

Os irmãos mais velhos observavam José e sentiam algo amargo no coração. Uma coisa chamada inveja...`,
      },
      {
        title: "O Presente Especial",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-2.svg",
        text: `Um dia, Jacó chamou José e disse com um sorriso enorme:

— Tenho um presente para você, meu filho!

E tirou de dentro de um baú um casaco lindo, feito com tecidos de todas as cores: vermelho vibrante, azul royal, amarelo ouro, verde esmeralda e roxo real.

Era o casaco mais bonito que José já tinha visto!

— Obrigado, pai! — disse José, abraçando o pai com força.

Mas quando os irmãos viram o casaco, seus rostos ficaram vermelhos de inveja.

— Por que José ganha presente especial e nós não? — resmungaram entre si.

E a inveja foi crescendo nos corações deles, como erva daninha...`,
      },
      {
        title: "Os Sonhos de José",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-3.svg",
        text: `José correu para contar um sonho aos irmãos:

— Sonhei que estávamos amarrando feixes de trigo no campo. O meu feixe ficou em pé, e os feixes de vocês se curvaram para o meu!

Os irmãos ficaram furiosos:

— Você acha que vai ser rei sobre nós?!

Noutra noite, José sonhou de novo e contou:

— Sonhei que o sol, a lua e onze estrelas se curvavam para mim!

Até o pai Jacó achou estranho:

— Que sonho é esse? Sua mãe, seu pai e seus irmãos vão se curvar a você?

Os irmãos cada vez mais com raiva...`,
      },
      {
        title: "A Triste Separação",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-4.svg",
        text: `Um dia, os irmãos estavam cuidando das ovelhas longe de casa. Jacó mandou José levá-los comida.

Quando os irmãos viram José se aproximando com seu casaco colorido, combinaram:

— Vamos se livrar desse sonhador!

Com crueldade, eles arrancaram o casaco de José, jogaram-no numa cisterna vazia e o venderam para mercadores que iam para o Egito.

José chorou muito. Ele não entendia por que seus próprios irmãos fariam isso.

Os irmãos pegaram o casaco, colocaram sangue de cabra nele e voltaram para casa com o coração pesado.

— Um animal selvagem matou José! — mentiram para o pai.

Jacó ficou arrasado. E José estava longe, longe...`,
      },
      {
        title: "O Plano de Deus",
        imageUrl: "/images/historias/jose-e-o-casaco-colorido-cena-5.svg",
        text: `No Egito, José enfrentou dias muito difíceis. Mas mesmo nos momentos mais tristes, Deus estava com ele.

Por causa do seu dom de interpretar sonhos, José conseguiu explicar um sonho do Faraó — o rei do Egito — e foi nomeado o segundo homem mais poderoso do país!

Anos depois, uma grande seca chegou. A fome chegou a todo o mundo... inclusive à família de Jacó.

Os irmãos de José precisaram viajar ao Egito para buscar comida. Quando chegaram, ficaram cara a cara com o poderoso governador...

Era José! Vivo, bem cuidado e sorrindo.

Os irmãos estavam com medo, mas José correu para abraçá-los com lágrimas nos olhos:

— Não tenham medo! O que vocês queriam para o mal, Deus transformou em bem. Fui trazido aqui para salvar muitas vidas — inclusive a nossa família!

E assim, José, Jacó e todos os irmãos se reuniram novamente — com choro, abraços e muita alegria.

O sonhador que nunca desistiu viu o plano de Deus se cumprir de um jeito que nunca imaginou!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/o-bebe-moises.svg",
    slug: "o-bebe-moises",
    title: "O Bebê Moisés",
    subtitle: "A criancinha da cestinha",
    description:
      "Quando Moisés nasceu, sua mãe teve uma ideia muito especial para protegê-lo: colocá-lo em uma cestinha no rio Nilo. Descubra como Deus cuidou desse bebê especial!",
    readingTime: "7 min",
    ageRange: "3–7 anos",
    emoji: "👶",
    gradient: "from-green-400 via-emerald-400 to-teal-500",
    bgColor: "bg-green-50",
    accentColor: "text-emerald-700",
    bibleReference: "Êxodo 2:1–10",
    testament: "velho",
    moralLesson:
      "Deus cuida de cada criança com amor. Você é muito especial para Ele!",
    scenes: [
      {
        title: "O Povo de Deus no Egito",
        imageUrl: "/images/historias/o-bebe-moises-cena-1.svg",
        text: `Há muito tempo, o povo de Deus — os hebreus — vivia no Egito. Eles haviam chegado como convidados, mas com o passar dos anos o Faraó, o rei do Egito, se tornou cruel.

— Os hebreus estão crescendo demais! — disse o Faraó, batendo o punho na mesa.

E ele fez algo muito injusto: ordenou que os hebreus trabalhassem como escravos, carregando pedras pesadas sob o sol quente.

Mas mesmo assim, o povo rezava e confiava que Deus não os havia esquecido.`,
      },
      {
        title: "A Mãe Corajosa",
        imageUrl: "/images/historias/o-bebe-moises-cena-2.svg",
        text: `Numa família hebreia, nasceu um bebê. Mas que bebê! Tinha olhos grandes e brilhantes, bochechas redondas e um sorriso que derretia o coração de qualquer pessoa.

A mãe olhava para o filho e sentia seu coração apertar. O Faraó havia dado uma ordem terrível: que todos os bebês hebreus fossem jogados no rio.

— Não vou deixar nada de ruim acontecer com você! — sussurrou ela, abraçando o bebê com força.

Por três meses, ela escondeu o bebê em casa. Quando ele chorava, ela o embalava cantando baixinho para ninguém ouvir.

Mas logo ele cresceria e ficaria difícil de esconder...`,
      },
      {
        title: "A Cestinha Mágica",
        imageUrl: "/images/historias/o-bebe-moises-cena-3.svg",
        text: `A mãe pensou e pensou. E teve uma ideia iluminada por Deus!

Ela pegou juncos — plantas que crescem na beira do rio — e trançou com todo cuidado uma cestinha resistente. Depois colocou alcatrão por fora para que a água não entrasse.

Forrouinha por dentro com tecido macio e colocou o bebê lá dentro, docinho e quentinho.

Com o coração cheio de fé, ela foi ao rio Nilo e colocou a cestinha entre as plantas da margem.

— Cuide dele, Senhor — rezou ela em voz baixa, com lágrimas escorrendo pelo rosto.

Miriam, a irmã mais velha do bebê, ficou escondida entre as plantas observando de longe, pronta para ver o que aconteceria.`,
      },
      {
        title: "A Princesa Encontra o Bebê",
        imageUrl: "/images/historias/o-bebe-moises-cena-4.svg",
        text: `Naquele mesmo dia, a filha do Faraó veio ao rio para se banhar com suas criadas.

De repente, ela viu algo se mexer entre as plantas.

— O que é aquilo? — perguntou curiosa, apontando para a cestinha.

Uma criada foi buscar. Quando abriram, o bebê olhou para a princesa com seus olhões... e começou a chorar.

— Ah! É um bebê hebreuinho! — disse a princesa, pegando ele no colo com ternura.

O coraçãozinho dela se derreteu de amor!

— Coitadinho... vou cuidar de você! Será meu filho! — disse ela com carinho.

Miriam, que estava observando tudo, correu até a princesa:

— Posso chamar uma mulher hebreia para amamentar o bebê para você?

— Sim, vá! — disse a princesa sorrindo.

Miriam foi correndo chamar... a própria mãe do bebê!`,
      },
      {
        title: "A Surpresa de Deus",
        imageUrl: "/images/historias/o-bebe-moises-cena-5.svg",
        text: `A mãe voltou com Miriam e ficou de frente para a princesa, com o coração quase saltando do peito.

— Cuide desse bebê para mim — disse a princesa — e eu pagarei por isso.

A mãe pegou o filho nos braços, e uma lágrima de alegria escorregou pelo seu rosto. Ela iria cuidar do próprio filho, com a proteção do palácio!

Deus tinha feito algo incrível: transformou o plano mais triste no mais lindo desfecho!

O bebê cresceu feliz e seguro. Quando ficou maior, a princesa o chamou para viver no palácio e deu a ele um nome:

— Seu nome será Moisés — que significa "tirado das águas".

E Moisés cresceu forte, sabendo que havia algo muito especial reservado para ele...`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/davi-e-golias.svg",
    slug: "davi-e-golias",
    title: "Davi e Golias",
    subtitle: "O menino corajoso que derrotou o gigante",
    description:
      "Todo mundo tinha medo do gigante Golias. Menos um pastorzinho chamado Davi, que sabia que com Deus ao lado, nada é impossível!",
    readingTime: "9 min",
    ageRange: "4–8 anos",
    emoji: "⚔️",
    gradient: "from-rose-400 via-red-400 to-orange-500",
    bgColor: "bg-rose-50",
    accentColor: "text-rose-700",
    bibleReference: "1 Samuel 17",
    testament: "velho",
    moralLesson:
      "Não importa o tamanho do problema — com Deus ao seu lado, você pode vencer qualquer gigante!",
    scenes: [
      {
        title: "O Gigante Aterrorizante",
        imageUrl: "/images/historias/davi-e-golias-cena-1.svg",
        text: `Os filisteus, inimigos do povo de Israel, tinham um guerreiro muito especial — e muito assustador.

Seu nome era Golias, e ele era... enorme!

Era tão alto que sua cabeça ficava no nível da janela do segundo andar. Sua armadura pesava mais do que três crianças juntas. E sua voz? Quando ele gritava, as árvores tremiam!

Todos os dias, Golias saía para o vale e gritava para o exército de Israel:

— HEY! Mandem alguém para lutar comigo! Se ele ganhar, viramos escravos de vocês. Se EU ganhar, vocês serão nossos escravos! Hahaha!

Os soldados de Israel olhavam uns para os outros, com joelhos bambos e faces pálidas. Ninguém queria enfrentar aquele monstro.`,
      },
      {
        title: "O Pastorzinho Davi",
        imageUrl: "/images/historias/davi-e-golias-cena-2.svg",
        text: `Num vilarejo próximo, havia um menino chamado Davi. Ele era jovem, de cabelos ruivos e rosto cheio de sardas, com um sorriso largo e olhos corajosos.

O trabalho de Davi era cuidar das ovelhas do seu pai. Todos os dias ele levava o rebanho para pastar, tocava sua harpa e cantava para Deus.

Mas Davi não era qualquer pastorzinho! Uma vez, quando um leão e depois um urso tentaram roubar uma ovelha, Davi foi corajoso:

— Deus me ajudou a enfrentar o leão e o urso. Ele também me ajuda em tudo!

Um dia, seu pai disse:

— Davi, leve comida para seus irmãos que estão no acampamento do exército.

E Davi foi, cantando pelo caminho.`,
      },
      {
        title: "Davi no Acampamento",
        imageUrl: "/images/historias/davi-e-golias-cena-3.svg",
        text: `Quando Davi chegou ao acampamento, ouviu aquela voz trovejante:

— HEY! Onde está o guerreiro de Israel?! Covardes! Hahahaha!

Davi olhou e viu o gigante Golias do outro lado do vale, com sua armadura brilhante e lança enorme.

Os soldados fugiam com medo.

Mas Davi franziu a testa e disse:

— Quem é esse filisteu que ousa desafiar o exército do Deus vivo?!

Os soldados olharam para ele espantados.

O rei Saul ouviu falar do jovem pastorzinho e mandou chamá-lo.

— Posso lutar contra esse gigante! — disse Davi ao rei.

— Você? Você é apenas um menino! — respondeu o rei Saul.

— Eu cuido das ovelhas do meu pai. Quando um leão ou urso tentou atacar, eu lutei e venci! — disse Davi com calma. — Deus me livrou de todos eles. Ele me livrará também de Golias.

O rei Saul olhou para o menino por um longo tempo...

— Vá. E que Deus esteja com você!`,
      },
      {
        title: "Cinco Pedrosas no Rio",
        imageUrl: "/images/historias/davi-e-golias-cena-4.svg",
        text: `Saul quis colocar sua armadura em Davi — capacete de bronze, colete de malha, espada.

Mas Davi deu alguns passos e quase caiu.

— Não consigo me mexer com tudo isso! — disse ele, tirando a armadura pesada. — Não estou acostumado.

E Davi foi ao riacho. Abaixou, procurou com cuidado e escolheu cinco pedrosas lisas e redondas.

As colocou na sua bolsa de pastor, pegou sua funda de couro — uma espécie de estilingue — e foi em direção ao gigante.

Do outro lado, Golias olhou e começou a gargalhar:

— Que é isso?! Mandam um menino com um pauzinho para me enfrentar? Hahahaha! Vou te transformar em almoço dos pássaros!

Mas Davi respondeu sem tremor na voz:

— Você vem com espada, lança e escudo. Mas eu venho em nome do SENHOR, o Deus de Israel! A batalha é do Senhor!`,
      },
      {
        title: "A Vitória Inesperada",
        imageUrl: "/images/historias/davi-e-golias-cena-5.svg",
        text: `Golias avançou pesado e barulhento.

Davi correu em direção ao gigante!

Com mãos firmes, enfiou a mão na bolsa, pegou uma pedra. Girou a funda no ar — uma, duas, três vezes — e soltou!

A pedra voou certeira e atingiu Golias bem no meio da testa.

PLOM!

O gigante cambaleou... e caiu no chão como uma árvore derrubada. Um barulho enorme ecoou pelo vale.

Silêncio total.

Depois... o exército de Israel soltou um grito enorme de alegria!

Os filisteus viram seu campeão caído e fugiram correndo.

Todos vieram ver Davi, o menino pastor que havia vencido o gigante com fé e uma pedra pequena.

E Davi levantou os olhos para o céu e agradeceu:

— Obrigado, Senhor! Com você, tudo é possível!

E assim o mundo aprendeu uma lição para sempre: não é o tamanho do guerreiro que importa — é o tamanho da fé!`,
      },
    ],
  },

  // ── Novo Testamento ──────────────────────────────────────────────────────
  {
    imageUrl: "/images/historias/o-nascimento-de-jesus.svg",
    slug: "o-nascimento-de-jesus",
    title: "O Nascimento de Jesus",
    subtitle: "A noite mais especial do mundo",
    description:
      "Numa noitinha estrelada em Belém, nasceu o bebê mais especial de todos os tempos. Os pastores, os anjos e os Reis Magos vieram de longe para conhecê-lo!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "⭐",
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    bgColor: "bg-indigo-50",
    accentColor: "text-indigo-700",
    bibleReference: "Lucas 2:1–20",
    testament: "novo",
    moralLesson:
      "Jesus veio ao mundo porque Deus nos ama imensamente. Cada Natal é uma festa de amor!",
    scenes: [
      {
        title: "A Longa Viagem",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-1.svg",
        text: `Havia muito tempo, numa cidadezinha chamada Nazaré, vivia uma moça muito especial chamada Maria. Ela tinha cabelos escuros, um sorriso gentil e um coração cheio de amor por Deus.

Maria estava esperando um bebê muito, muito especial. Um anjo chamado Gabriel tinha visitado ela e dito:

— Maria, você vai ter um filho! E ele será o Filho de Deus. Chame-o de Jesus!

Maria ficou surpresa, mas aceitou com alegria:

— Que seja como Deus quiser!

Seu noivo, José, era um carpinteiro bondoso de mãos calejadas e coração generoso. Quando soube da notícia, também ficou feliz e prometeu cuidar de Maria e do bebê.

Mas antes de o bebê nascer, chegou uma notícia: o rei queria contar todas as pessoas do país. Todo mundo precisava viajar para a cidade de sua família.

Para José, isso significava ir a Belém — uma viagem longa e cansativa!`,
      },
      {
        title: "Sem Lugar na Estalagem",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-2.svg",
        text: `José e Maria partiram para Belém. Maria ia montada num burrico paciente enquanto José andava ao lado, cuidando de cada passo.

A viagem era longa e as estradas eram de terra. O sol queimava durante o dia e o frio chegava à noite.

Quando finalmente chegaram em Belém, a cidade estava cheia de gente! Haviam pessoas por toda parte — nas ruas, nas praças, nas casas.

José bateu na porta de uma estalagem:

— Por favor, você tem um quarto? Minha esposa está para ter bebê!

— Sinto muito, está tudo lotado — respondeu o dono.

José tentou outra estalagem. E mais outra. E mais uma...

— Não tem lugar, não.
— Já estamos cheios!
— Não posso ajudar.

Mas um estalajadeiro de coração bom disse:

— Não tenho quarto, mas tenho um estábulo aqui atrás. Está limpo e tem palha fresca. Vocês podem ficar lá.

José e Maria agradeceram com o coração cheio de gratidão.`,
      },
      {
        title: "O Bebê Jesus Nasce",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-3.svg",
        text: `Naquela noite, no estábulo quentinho, cercada pelo cheiro de palha e pelo hálito morno dos animais, Maria teve seu bebê.

Era lindo! Um menino perfeito com olhinhos que pareciam carregar toda a luz do céu.

Maria embrulhou o bebê Jesus com carinho em pedaços de pano e o colocou numa manjedoura — a caixinha de comida dos animais — que virou o bercinho mais especial do mundo.

O burrinho, o boi e as ovelhas ficaram quietinhos, como se soubessem que algo muito sagrado estava acontecendo.

Lá fora, o céu estava cheio de estrelas brilhantes. Uma delas, maior e mais linda que todas, brilhava bem em cima do estábulo.

Era o nascimento mais importante de toda a história!`,
      },
      {
        title: "Os Pastores e os Anjos",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-4.svg",
        text: `Nos campos perto de Belém, alguns pastores cuidavam de suas ovelhas durante a noite. Eles olhavam para o céu escuro e conversavam baixinho.

De repente... WHOOOOSH! Uma luz enorme e dourada iluminou tudo! Os pastores pularam de susto.

Era um anjo brilhante! Os pastores ficaram com tanto medo que caíram no chão.

— Não tenham medo! — disse o anjo com voz tranquila e alegre. — Tenho uma boa notícia, a melhor notícia de todas! Hoje nasceu em Belém o Salvador do mundo — Jesus, o Filho de Deus! Você vão achá-lo num estábulo, embrulhado em pano e deitado numa manjedoura.

E então o céu inteiro se encheu de anjos cantando:

— Glória a Deus! E paz na terra para todas as pessoas!

Quando os anjos foram embora, os pastores se olharam com olhos brilhando:

— Vamos lá! Vamos ver esse bebê!

E saíram correndo em direção a Belém!`,
      },
      {
        title: "Os Reis Magos e a Estrela",
        imageUrl: "/images/historias/o-nascimento-de-jesus-cena-5.svg",
        text: `Bem longe dali, no Oriente, sábios estudiosos das estrelas observaram o céu e viram algo nunca antes visto: uma estrela nova e enorme, mais brilhante que todas.

— Essa estrela significa que nasceu um rei muito especial! — disseram eles.

E partiram numa longa jornada, seguindo a estrela, levando presentes preciosos: ouro, incenso e mirra.

Depois de muito tempo viajando por desertos e montanhas, a estrela parou bem em cima do lugar onde estava o menino Jesus.

Os Reis Magos entraram, viram o bebê Jesus no colo de Maria e sentiram seus corações se encherem de alegria. Ajoelharam-se e ofereceram seus presentes preciosos.

Aquela noite em Belém foi a noite mais especial da história do mundo inteiro.

O Filho de Deus tinha chegado — não num palácio com coroa de ouro, mas num estábulo simples, com coração cheio de amor por cada pessoa deste mundo.

Inclusive por você!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jesus-e-os-pescadores.svg",
    slug: "jesus-e-os-pescadores",
    title: "Jesus e os Pescadores",
    subtitle: "Quando Jesus chamou seus amigos",
    description:
      "Pedro e André passaram a noite toda pescando e não pegaram nada. Até que encontraram Jesus na margem do lago e tudo mudou de um jeito incrível!",
    readingTime: "7 min",
    ageRange: "3–8 anos",
    emoji: "🐟",
    gradient: "from-cyan-400 via-blue-500 to-indigo-500",
    bgColor: "bg-cyan-50",
    accentColor: "text-cyan-700",
    bibleReference: "Lucas 5:1–11",
    testament: "novo",
    moralLesson:
      "Quando Jesus entra na nossa vida, tudo muda para melhor. Ele nos chama para ser seus amigos e ajudar as pessoas!",
    scenes: [
      {
        title: "Uma Noite Sem Peixe",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-1.svg",
        text: `O lago da Galileia era lindo — azul e brilhante, rodeado de colinas verdes.

Naquele lago, havia dois irmãos pescadores chamados Simão Pedro e André. Todo dia eles saíam no barco de madeira com suas redes e trabalhavam muito para pescar.

Mas naquela noite... nada.

Eles jogaram a rede de um lado. Nada.
Jogaram do outro lado. Nada.
Esperaram em silêncio. Nada.

Quando o sol começou a nascer, Pedro e André voltaram para a margem cansados e com os ombros caídos. Suas redes estavam vazias.

— Que noite horrível — murmurou Pedro, começando a lavar as redes.

Seu parceiro Tiago e seu irmão João estavam consertando as redes no barco ao lado, também com cara de pouco caso.`,
      },
      {
        title: "O Homem na Margem",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-2.svg",
        text: `De repente, uma multidão de pessoas veio chegando pela beira do lago — queriam ouvir um homem que estava ensinando.

Era Jesus! Ele tinha olhos bondosos e uma voz que deixava as pessoas com o coração quentinho.

A multidão foi crescendo e Jesus precisava de espaço. Ele olhou para Pedro e pediu:

— Simão, posso entrar no seu barco? Você empurra um pouquinho para longe da margem?

Pedro concordou, curioso com aquele homem.

Jesus entrou no barco, sentou, e de lá dentro começou a ensinar a multidão na margem. Pedro ficou escutando enquanto segurava o barco. E as palavras de Jesus eram tão bonitas, tão cheias de amor e sabedoria, que Pedro ficou de boca aberta.

Quando Jesus terminou de falar, virou para Pedro e disse com um sorriso:

— Agora leva o barco para águas mais fundas e joguem as redes para pescar.`,
      },
      {
        title: "A Rede Cheia",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-3.svg",
        text: `Pedro coçou a cabeça. Tinha pescado a noite inteira sem pegar nada. E agora de dia, quando os peixes ficam escondidos?

Mas havia algo naquele homem que fazia Pedro querer obedecer. Com um suspiro, ele disse:

— Mestre, trabalhamos a noite toda e não pegamos nada. Mas já que você está pedindo... vou jogar a rede!

Jogaram.

E então... a rede ficou PESADA! Tão pesada que Pedro mal conseguia puxar!

Os peixes entraram em quantidade enorme — a rede começou a rasgar de tanto peixe!

— TIAGO! JOÃO! VEM CÁ! — gritou Pedro desesperado.

O outro barco veio correndo. Os dois barcos ficaram tão cheios de peixes que quase afundavam!

Pedro olhou para Jesus com os olhos arregalados. Seu coração estava acelerado. Aquilo não era possível...`,
      },
      {
        title: "Venham me Seguir!",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-4.svg",
        text: `Pedro caiu de joelhos no barco, entre os peixes saltitantes, e disse com a voz trêmula:

— Senhor, eu não sou digno de estar perto de você. Sou um homem cheio de defeitos!

Jesus olhou para ele com um sorriso cheio de carinho e disse:

— Não tenha medo, Pedro! A partir de agora, em vez de pescar peixes, você vai ajudar pessoas a encontrar Deus!

Pedro ficou olhando para Jesus. Depois olhou para o lago. Depois para os peixes.

E tomou uma decisão que mudou sua vida para sempre.

Ele deixou o barco, as redes e todos aqueles peixes na margem...

E foi seguir Jesus.

Tiago e João fizeram a mesma coisa! Os quatro amigos partiram juntos, cheios de alegria e curiosidade, sem saber ao certo o que viria pela frente — mas sabendo que ao lado de Jesus, seria incrível.`,
      },
      {
        title: "Amigos de Jesus",
        imageUrl: "/images/historias/jesus-e-os-pescadores-cena-5.svg",
        text: `Ao longo do tempo, Jesus foi chamando mais pessoas para caminhar com Ele. No total, doze amigos especiais — chamados de discípulos — foram seus companheiros de jornada.

Eles andaram juntos pelas cidades e vilarejos. Viram Jesus curar pessoas doentes, ajudar os que estavam tristes e ensinar coisas maravilhosas sobre o amor de Deus.

Pedro, aquele pescador que não tinha conseguido um peixe sequer naquela noite, se tornou um dos amigos mais próximos de Jesus.

E sabe o que é mais lindo nessa história?

Jesus ainda hoje chama as pessoas para serem suas amigas. Ele olha para você — assim como olhou para Pedro na margem do lago — e convida:

— Quer ser meu amigo?

E quando você diz sim para Jesus, sua vida também fica cheia, cheia, cheia... assim como aquela rede de peixe!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jesus-acalma-a-tempestade.svg",
    slug: "jesus-acalma-a-tempestade",
    title: "Jesus Acalma a Tempestade",
    subtitle: "Quando Jesus mandou o vento parar",
    description:
      "Os discípulos estavam com muito medo dentro do barco sacudido pelas ondas enormes. Mas Jesus estava com eles — e com uma só palavra, tudo ficou em paz.",
    readingTime: "7 min",
    ageRange: "3–8 anos",
    emoji: "🌊",
    gradient: "from-slate-500 via-blue-600 to-cyan-500",
    bgColor: "bg-slate-50",
    accentColor: "text-blue-700",
    bibleReference: "Marcos 4:35–41",
    testament: "novo",
    moralLesson:
      "Quando você tiver medo, lembre que Jesus está sempre com você. Ele é mais forte do que qualquer tempestade!",
    scenes: [
      {
        title: "Um Dia Cheio",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-1.svg",
        text: `Jesus tinha passado o dia inteiro ensinando multidões de pessoas à beira do lago da Galileia.

Ele contou histórias lindas — sobre sementes que crescem, sobre um pai que ama seus filhos, sobre o reino de Deus.

As pessoas ouviam com os olhos brilhando e o coração esperançoso.

Mas quando o sol começou a se pôr, Jesus estava cansado. Cansado de um jeito muito humano — com os pés doendo e os olhos pesados.

Ele olhou para seus discípulos e disse com uma voz tranquila:

— Vamos para o outro lado do lago.

Os discípulos toparam. Afinal, muitos deles eram pescadores e conheciam bem aquelas águas. Subiram no barco, Jesus foi com eles, e partiram enquanto o céu ficava laranja e roxo.`,
      },
      {
        title: "Jesus Dormindo",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-2.svg",
        text: `Jesus foi para a parte de trás do barco, pegou um travesseiro e... dormiu.

Sim! O Filho de Deus estava tão cansado que dormiu profundamente enquanto o barco navegava.

Os discípulos remavam e conversavam baixinho para não acordá-lo.

Tudo estava bem. O lago estava calmo, o céu estava estrelado.

Mas então, sem aviso nenhum, tudo mudou.

Uma nuvem escura e pesada cobriu as estrelas. O vento começou a soprar — primeiro devagarzinho, depois cada vez mais forte.

As ondas ficaram grandes. Depois enormes.

O barco começou a balançar — para um lado, para o outro, para cima, para baixo!

A água entrava por cima das bordas!`,
      },
      {
        title: "O Medo dos Discípulos",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-3.svg",
        text: `Os discípulos pescadores conheciam bem o lago. Eles sabiam quando uma tempestade era perigosa.

E aquela era MUITO perigosa.

Eles remavam com toda a força, tentavam tirar a água do barco, gritavam uns para os outros no meio do vento uivante.

— A onda! CUIDADO COM A ONDA!

— O barco vai afundar!

— Estamos perdidos!

E Jesus? Ainda dormindo lá atrás, balançando junto com o barco, sem se preocupar com nada.

Os discípulos olharam uns para os outros. Olharam para Jesus.

Pedro foi até ele e sacudiu:

— MESTRE! MESTRE! Acorda! A gente vai morrer afogado! Você não liga para isso?!`,
      },
      {
        title: "Paz, Aquieta-te!",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-4.svg",
        text: `Jesus abriu os olhos. Olhou para os discípulos apavorados. Olhou para as ondas furiosas. Olhou para o vento sacudindo tudo.

Levantou-se devagar.

E com uma voz calma — mas cheia de autoridade — falou para o vento e para as ondas:

— Paz! Aquieta-te!

E o vento parou.

Assim. De repente. Completamente.

As ondas foram ficando menores... menores... menores... até que o lago ficou liso como um espelho.

Silêncio total. Só o barulho do barco boiando na água quieta.

Os discípulos ficaram olhando para o lago, para Jesus, para o lago de novo.

Estavam com a boca aberta. As mãos tremiam — mas não de medo. De espanto.

— Que homem é esse? — sussurravam uns para os outros. — Até o vento e o mar obedecem a ele!`,
      },
      {
        title: "Não Tenham Medo",
        imageUrl: "/images/historias/jesus-acalma-a-tempestade-cena-5.svg",
        text: `Jesus olhou para cada um dos seus amigos com carinho.

— Por que vocês ficaram com tanto medo? — perguntou com gentileza. — Ainda não confiam em mim?

Os discípulos abaixaram a cabeça. Era verdade: eles tinham esquecido que Jesus estava com eles.

E quando Jesus está com você, não há tempestade grande o suficiente para destruir você.

Eles chegaram do outro lado do lago em paz, o coração ainda acelerado mas cheio de fé.

E aquela história ficou guardada para sempre na memória deles — a noite em que viram Jesus mandar a tempestade parar com uma palavra.

E você, sabe de uma coisa?

Quando você estiver com medo — de trovão, de escuro, de qualquer coisa — pode lembrar dessa história e dizer: "Jesus está comigo." Porque está mesmo. Sempre.`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/jesus-alimenta-cinco-mil.svg",
    slug: "jesus-alimenta-cinco-mil",
    title: "Jesus Alimenta 5.000 Pessoas",
    subtitle: "O almoço de um menino que alimentou uma multidão",
    description:
      "Era hora do jantar e havia 5.000 pessoas com fome no campo. Um menininho tinha só 5 pãezinhos e 2 peixinhos. Mas nas mãos de Jesus, aquilo se tornou um banquete!",
    readingTime: "8 min",
    ageRange: "3–8 anos",
    emoji: "🍞",
    gradient: "from-yellow-400 via-amber-400 to-orange-500",
    bgColor: "bg-yellow-50",
    accentColor: "text-amber-700",
    bibleReference: "João 6:1–14",
    testament: "novo",
    moralLesson:
      "Quando damos o que temos para Jesus, mesmo que pareça pouco, Ele pode fazer algo incrível com isso!",
    scenes: [
      {
        title: "Uma Multidão no Campo",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-1.svg",
        text: `A notícia sobre Jesus se espalhava por todas as cidades e vilarejos: ele curava pessoas doentes, ajudava os tristes e ensinava coisas maravilhosas.

E por isso as pessoas iam até onde ele estivesse.

Naquele dia, Jesus e seus discípulos foram para um campo tranquilo perto do lago. Queriam descansar um pouco.

Mas quando chegaram... a multidão já estava lá esperando!

Famílias inteiras tinham caminhado horas para ver Jesus. Havia velhinhos e bebês de colo, crianças correndo e jovens curiosos. Eram tantas pessoas que parecia uma cidadezinha inteira reunida no campo aberto.

Jesus olhou para aquela gente e sentiu seu coração se encher de amor. Ele não mandou ninguém embora.

Pelo contrário — ficou o dia todo ensinando, conversando e curando quem precisava.`,
      },
      {
        title: "Hora do Jantar",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-2.svg",
        text: `O sol começou a descer no horizonte, pintando o céu de laranja e rosa.

Filipe, um dos discípulos, olhou para a multidão e depois para Jesus:

— Mestre... já está ficando tarde. Essas pessoas estão com fome! Acho que devemos mandá-las para as aldeias comprarem comida.

Jesus olhou para Filipe com um brilho nos olhos e perguntou:

— E onde vamos comprar pão para alimentar toda essa gente?

Filipe fez as contas rapidamente:

— Duzentos denários de pão não seriam suficientes para cada um pegar um pedacinho sequer!

André, outro discípulo, veio correndo:

— Mestre! Encontrei um menino aqui que tem comida. Mas é bem pouco...`,
      },
      {
        title: "O Menino Corajoso",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-3.svg",
        text: `O menino se aproximou de Jesus. Era um garoto simples, com cabelos bagunçados e sandálias empoeiradas de tanto caminhar.

Na cesta que ele carregava havia o almoço que sua mãe tinha preparado:

Cinco pãezinhos de cevada — pequenos, redondos e cheirosos.
Dois peixinhos — salgados e secos.

Era a comida de um menino. Para cinco mil pessoas, não daria nem para um lanche.

Os discípulos olhavam para a cesta e faziam careta:

— Isso não vai adiantar nada...

Mas o menino olhou para Jesus e, com um sorriso, estendeu a cesta:

— Pode pegar! É tudo o que eu tenho, mas você pode usar.

Jesus pegou a cesta e sorriu para o menino com um olhar que dizia: obrigado. Você não sabe o que acabou de fazer.`,
      },
      {
        title: "O Milagre",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-4.svg",
        text: `Jesus pediu para todo mundo se sentar na grama. Cinco mil pessoas se acomodaram em grupos, como um piquenique gigante.

Então Jesus pegou os cinco pães, olhou para o céu e agradeceu a Deus.

Depois começou a partir os pães.

E distribuiu para os discípulos. Os discípulos levaram para as pessoas.

E Jesus partiu mais. E distribuiu mais.

E mais. E mais. E mais.

Os pães não acabavam!

Os peixinhos não acabavam!

As pessoas comiam, se serviam de novo e ainda sobravam!

Crianças rindo, adultos boquiabertos, discípulos correndo de um lado para o outro carregando pão. Era uma festa!

Quando todo mundo tinha comido até ficar satisfeito, Jesus pediu:

— Recolham o que sobrou, para nada ser desperdiçado.

Os discípulos foram com cestas... e encheram DOZE cestas com os pedaços que sobraram!

De cinco pãezinhos e dois peixinhos!`,
      },
      {
        title: "O Presente do Menino",
        imageUrl: "/images/historias/jesus-alimenta-cinco-mil-cena-5.svg",
        text: `Enquanto os discípulos recolhiam as sobras, o menino ficou olhando com os olhos arregalados.

Ele tinha dado tudo que tinha. Uma coisa pequenininha.

E Jesus tinha alimentado cinco mil pessoas com aquilo.

O menino nunca mais esqueceu aquele dia.

E essa história chegou até nós, milhares de anos depois, para nos lembrar de algo muito importante:

Você não precisa ter muito para fazer a diferença. Um sorriso, uma palavra de carinho, um biscoitinho dividido com o amigo — nas mãos de Jesus, qualquer coisa vira algo grande.

Quando você oferece o que tem com amor, coisas incríveis podem acontecer!`,
      },
    ],
  },
  {
    imageUrl: "/images/historias/a-ressurreicao-de-jesus.svg",
    slug: "a-ressurreicao-de-jesus",
    title: "A Ressurreição de Jesus",
    subtitle: "O maior milagre de todos os tempos",
    description:
      "Os amigos de Jesus estavam muito tristes. Mas na manhã do terceiro dia, algo incrível aconteceu — algo que mudou o mundo para sempre e nos enche de esperança!",
    readingTime: "9 min",
    ageRange: "4–8 anos",
    emoji: "✨",
    gradient: "from-violet-400 via-purple-500 to-pink-400",
    bgColor: "bg-violet-50",
    accentColor: "text-violet-700",
    bibleReference: "Lucas 24:1–12; João 20",
    testament: "novo",
    moralLesson:
      "Jesus venceu até a morte! Por isso podemos viver sem medo, cheios de alegria e esperança — porque Ele está vivo!",
    scenes: [
      {
        title: "A Sexta-Feira Triste",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-1.svg",
        text: `Esta história começa com tristeza. Uma tristeza muito grande.

Jesus, o melhor amigo que as pessoas já tiveram, tinha sido preso por pessoas que não gostavam dele. Mesmo sem ter feito nada de errado, Jesus foi colocado numa cruz.

Seus amigos — Maria Madalena, os discípulos, sua mãe Maria — ficaram olhando de longe, com o coração partido.

Por que isso estava acontecendo com Jesus, que só fazia o bem?

Mas Jesus, mesmo na dor, olhou para o céu e disse:

— Pai, perdoa eles. Eles não sabem o que estão fazendo.

Até no momento mais difícil, Jesus pensava em perdoar e amar.

Quando Jesus morreu, seus amigos ficaram arrasados. Colocaram seu corpo com muito carinho num túmulo — uma caverna na rocha — e rolaram uma pedra enorme na entrada.

Aquela noite foi a mais triste da vida deles.`,
      },
      {
        title: "A Manhã do Terceiro Dia",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-2.svg",
        text: `Um, dois, três dias se passaram.

Bem cedinho, quando o céu ainda estava cinza e o sol mal tinha nascido, Maria Madalena e algumas outras mulheres foram até o túmulo.

Elas carregavam perfumes e flores. Queriam cuidar do corpo de Jesus com carinho — era um jeito de demonstrar amor, mesmo depois da morte.

O caminho era silencioso. Os pássaros mal tinham começado a cantar.

Enquanto caminhavam, uma preocupação:

— E a pedra enorme na entrada do túmulo? Quem vai tirar ela pra gente?

Mas quando chegaram mais perto e olharam...

A pedra estava rolada para o lado!

O túmulo estava aberto!

As mulheres olharam umas para as outras com o coração na garganta. O que tinha acontecido?`,
      },
      {
        title: "O Túmulo Vazio",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-3.svg",
        text: `Maria Madalena correu até a abertura e olhou para dentro.

O túmulo estava vazio.

As tiras de pano em que Jesus tinha sido enrolado estavam ali, dobradas com cuidado, mas Jesus não estava.

Dois homens com roupas que brilhavam como relâmpago estavam dentro do túmulo. Eram anjos!

As mulheres caíram com o rosto no chão, com o coração acelerado.

— Por que vocês procuram entre os mortos aquele que está vivo? — perguntaram os anjos com vozes cheias de alegria. — Ele não está aqui! Ele ressuscitou!

Ressuscitou! Voltou à vida!

As mulheres levantaram a cabeça. Olharam para o túmulo vazio. Olharam para os anjos. Olharam umas para as outras.

E então saíram correndo!`,
      },
      {
        title: "Jesus Aparece para Maria",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-4.svg",
        text: `Maria Madalena ficou perto do túmulo, chorando.

Ela ainda não entendia direito o que tinha acontecido. O coração dela doía de saudade.

De repente, alguém estava perto dela. Ela pensou que era o jardineiro.

— Por que você está chorando? Quem você procura? — perguntou ele.

— Senhor, se você sabe onde está Jesus, me diga onde colocaram ele... — respondeu Maria com a voz trêmula.

E então a pessoa disse apenas uma palavra:

— Maria.

Só o jeito que ele falou o nome dela... ela reconheceu imediatamente!

Maria virou e viu Jesus — vivo, de pé, sorrindo para ela!

— Mestre! — ela exclamou, correndo para ele.

Era real. Ele estava vivo de verdade!

— Vai e conta para os meus amigos — disse Jesus. — Diga que eu estou vivo!`,
      },
      {
        title: "A Alegria que Nunca Acaba",
        imageUrl: "/images/historias/a-ressurreicao-de-jesus-cena-5.svg",
        text: `Maria Madalena saiu correndo o mais rápido que suas pernas podiam!

Chegou ofegante onde estavam os discípulos, com as bochechas vermelhas e os olhos brilhando:

— Eu vi Jesus! Ele está vivo! ELE RESSUSCITOU!

Os discípulos ficaram olhando para ela. Alguns não acreditaram de primeira. Como podia?

Mas logo Jesus apareceu para eles também — passando por portas fechadas, mostrando as marcas das mãos, comendo peixe com eles, conversando e ensinando.

Era realmente Ele. Vivo. Para sempre.

E essa notícia — que Jesus ressuscitou — se espalhou pelo mundo inteiro.

Até hoje, quando chega a Páscoa, as pessoas celebram essa alegria:

Jesus estava morto... e voltou à vida!

Isso significa que o amor de Deus é mais forte do que qualquer coisa. Mais forte do que a tristeza, mais forte do que o medo, mais forte do que a própria morte.

E Jesus vive até hoje. No seu coração, quando você fala com Ele, Ele ouve. Porque está vivo!`,
      },
    ],
  },
]

export function getStoryBySlug(slug: string): Story | undefined {
  return stories.find((s) => s.slug === slug)
}
