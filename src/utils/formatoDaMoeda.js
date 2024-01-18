const formatCurrency = (value) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL", // muda a moeda de exibição no caso converteu para real
    });
}

export default formatCurrency;