const helper = (input) =>{

const formatRp = input.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR'
      });

return formatRp

}

// console.log(helper(2000));

module.exports = helper
