//Todos os itens testados no site regex101

const TitularDoRegistro = `/.?titular do registro:(.+)-(.+)\/([A-Z]{2})/`;

const CidadeRegistro = `/[A-z\s\u00E0-\u00FC]+\/([A-Z]{2})/`;

const MarcaComercial = `.?marca comercial:(.+)`;

const ResultadoDoPedido = `.?resultado do pedido:(.+\b)`;

const Fabricante = `.?fabricantes?:(.+\b)`;

const NomeQuimico = `.?nome quí?mico?:(.+\b)`; // ou este formato .?nome qu[u00E0-\u00FC]mico:(.+\b)

const NomeComum = `.?nome comum?:(.+)`;

const NomeCientifico = `.?nome cientí?fico?\-?(.+)`;

const IndicacaoDeUso = `.?indicação?(.+)`; //ou este formato .?indica[u00E0-\u00FC]o*(.+)

const ClassificacaoToxicologica = `.?classificação\stoxicoló?gica:?(.+)`;

const ClassificacaoQuantoAoPotencial = `.?classificaç?ã?o\squanto\sao\spotencial(.+)`;
