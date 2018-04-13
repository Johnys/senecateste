import seneca from 'seneca';
import math from './services/math';

const senecaService = seneca();
senecaService.use(math);

senecaService.act({ role: 'math', cmd: 'sum', number1: 1, number2: 2 }, (err, result ) => {
    if (err){
        console.log(err);
    }
    console.log(result);
});