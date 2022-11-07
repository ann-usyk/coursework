const reportWebVitals = async onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    let { getCLS, getFID, getFCP, getLCP, getTTFB } = await import('web-vitals')
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;
