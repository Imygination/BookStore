const formatRp = (input) =>{

const formatRp = input.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
      });

return formatRp

}


module.exports = formatRp
