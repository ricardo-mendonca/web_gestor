export class Despesa {
  id: number;
  descricao: string;
  qtdParcela: number;
  parcela: number;
  despesaFixa: string;
  ativo: string;
  pago: string;
  valorParcela: number;
  valorMulta: number;
  valorDesconto: number;
  dataCadastro: Date;
  dataVencimento: Date;
  dataPagamento: Date;
  dataAlteracao: Date;
  bancoId: number;
  categoriaId: number;
  usuarioId: number;
}
