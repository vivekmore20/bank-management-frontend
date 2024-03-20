import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'depositWithdrawColor'
})
export class DepositWithdrawColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value.toLowerCase()) {
        case 'deposit':
            return 'Deposit'; 
        case 'withdraw':
            return 'Withdraw'; 
        default:
            return ''; 
    }
}

}
