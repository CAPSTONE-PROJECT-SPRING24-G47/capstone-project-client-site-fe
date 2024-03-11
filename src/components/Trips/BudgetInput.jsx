import React from 'react';

const BudgetInput = ({ placeholder, setBudget, budget, type }) => {
  // const formatCurrency = (value) => {
  //   return value.toLocaleString('en-US', {
  //     style: 'currency',
  //     currency: 'VND',
  //   });
  // };

  const formatCurrency = (value) => {
    // Convert value to string
    let formattedValue = value.toString();

    // Separate the whole number part from the decimal part
    let parts = formattedValue.split('.');
    let wholeNumberPart = parts[0];
    let decimalPart = parts.length > 1 ? '.' + parts[1] : '';

    // Add commas to separate every three digits from the right in the whole number part
    let integerPartWithCommas = wholeNumberPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ','
    );

    // Return the formatted value with commas and the decimal part
    return integerPartWithCommas + decimalPart;
  };

  const handleChange = (e) => {
    let inputValue = +e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (type === 'min') {
      setBudget((prevState) => ({
        ...prevState,
        minPrice: inputValue,
      }));
    } else if (type === 'max') {
      setBudget((prevState) => ({
        ...prevState,
        maxPrice: inputValue,
      }));
    }
  };

  return (
    <div className="relative flex w-[25%] items-center overflow-hidden rounded-xl bg-bg-color px-2 py-1">
      <div className="pl-4">{type === 'min' ? 'Tối thiểu' : 'Tối đa'}</div>
      <input
        onChange={handleChange}
        autoFocus={true}
        value={formatCurrency(
          type === 'min' ? budget.minPrice : budget.maxPrice
        )}
        placeholder={placeholder}
        type="text"
        className="my-2 flex-1 select-none bg-bg-color px-4 py-1 outline-none"
      />
      <p className="pr-6 opacity-50">VND</p>
    </div>
  );
};

export default BudgetInput;
