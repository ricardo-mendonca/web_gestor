export class DespesaModel {
  id: number;
  descricao: string;
  qtdParcela: number;
  parcela: number;
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
  ativo: boolean;
  pago: boolean;
  despesaFixa: boolean;
}
