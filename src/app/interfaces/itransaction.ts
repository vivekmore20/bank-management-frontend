export interface ITransaction {
    transactionId:number,
    accountId: number,
    transactionType: string,
    amount: number,
    transactionDate: Date,
    description: string
}
