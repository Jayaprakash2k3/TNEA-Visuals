function totalReg() {
  fetch("/totReg", {
    method: "GET",
  }).then((response) => {
    return response.json();
  }).then((data) => {
    var options = {
      series: [
        {
          name: "Count",
          data: [data.fztot, data.utot, data.ptot, data.tpcnt],
        },
      ],
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          horizontal: true,
          distributed: true,
          barHeight: '80%',
          isFunnel: true,
        },
      },
      colors: [
        '#008ffb',
        '#00e396',
      ],
      dataLabels: {
        style: {
          colors: ['#fff', '#fff'],
          fontWeight: 'bold',
        },
        enabled: true,
        formatter: function (val, opt) {
          return opt.w.globals.labels[opt.dataPointIndex] + " : " + val
        },

      },
      title: {
        text: 'Summary',
        align: 'middle',
      },
      xaxis: {
        categories: ['Freezed Upload', 'Upload Started', 'Payment Completed', 'Total Registration'],

      },
      legend: {
        show: false,
      },
    };
    var chart = new ApexCharts(document.querySelector("#totalReg"), options);
    chart.render();
    var baroptions = {
      series: [{
        name: 'Count',
        data: [data.fztot, data.utot, data.ptot, data.tpcnt],
        style: {
          colors: [
            '#008ffb',
            '#00e396',
          ]
        }
      }],

      title: {
        text: 'Summary',

        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      },
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#000000"]
        }
      },

      xaxis: {
        categories: ['Freezed Upload', 'Upload Started', 'Payment Completed', 'Total Registration'],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },

      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          }
        }

      },


    };
    var chart = new ApexCharts(document.querySelector("#batTotalReg"), baroptions);
    chart.render();
    document.querySelector("#totalRegCrd").innerHTML = data.tpcnt;
    document.querySelector("#paymentCrd").innerHTML = data.ptot;
    document.querySelector("#uploadCrd").innerHTML = data.utot;
    document.querySelector("#FreezeCrd").innerHTML = data.fztot;
    document.querySelector("#summary").classList.remove("animate-pulse")
  }).catch((error) => {
    console.log(error);
  })

}
function gender() {
  fetch("/gender", {
    method: "GET",
  }).then((response) => {
    return response.json();
  }).then((data) => {

    var options = {
      series: [data.Male, data.Female, data.Transgender],
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },


        }
      }],
      labels: ['Male', 'Female', 'Transgender'],
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"]
        }
      },
    };
    var baroptions = {

      series: [{
        name: 'Male',
        data: [data.Male]
      }, {
        name: 'Female',
        data: [data.Female]
      }, {
        name: 'Transgender',
        data: [data.Transgender]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Data'],
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"]
        }
      },

      fill: {
        opacity: 1
      },


    };


    var chart = new ApexCharts(document.querySelector("#gender"), options);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#barGender"), baroptions);
    chart.render();
    document.querySelector("#maleCrd").innerHTML = data.Male;
    document.querySelector("#femaleCrd").innerHTML = data.Female;
    document.querySelector("#transCrd").innerHTML = data.Transgender;
    document.querySelector("#genderBlock").classList.remove("animate-pulse")

  }).catch((error) => {
    console.log(error);
  })

}
function mode() {
  fetch("/mode", {
    method: "GET",
  }).then((response) => {
    return response.json();
  }).then((data) => {

    var options = {
      series: [data.online, data.DD],
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },


        }
      }],
      labels: ['Online', 'DD'],
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"]
        }
      },
    };
    var baroptions = {

      series: [{
        name: 'Online',
        data: [data.online]
      }, {
        name: 'DD',
        data: [data.DD]
      }],
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Data'],
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#000000"]
        }
      },
      plotOptions: {
        bar: {
          offsetY: -30,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      fill: {
        opacity: 1
      },



    };
    var chart = new ApexCharts(document.querySelector("#mode"), options);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#barMode"), baroptions);
    chart.render();
    document.querySelector("#onlineCrd").innerHTML = data.online;
    document.querySelector("#DDCrd").innerHTML = data.DD;
    document.querySelector("#payment").classList.remove("animate-pulse")

  }).catch((error) => {
    console.log(error);
  })

}
function govt() {
  fetch("/government", {
    method: "GET",
  }).then((response) => {
    return response.json();
  }).then((data) => {
    var years = [];
    var counts = [];
    var bar = [];
    data["gyear"].forEach(element => {
      years.push(element["_id"]);
      counts.push(element["count"]);
      bar.push({ name: element["_id"], data: [element["count"]] });

    });
    var options = {
      series: counts,
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },


        }
      }],
      labels: years,
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"]
        }
      },
    };
    var baroptions = {
      series: [{
        name: 'Count',
        data: counts,
        style: {
          colors: [
            '#008ffb',
            '#00e396',
          ]
        }
      }],

      title: {
        text: 'Summary',

        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      },
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#000000"]
        }
      },

      xaxis: {
        categories: years,
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },

      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val;
          }
        }

      },


    };
    var chart = new ApexCharts(document.querySelector("#govt"), options);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#barGovt"), baroptions);
    chart.render();
    document.querySelector("#government").classList.remove("animate-pulse")
    addRows(bar, "#govt-tbl");
  }).catch((error) => {
    console.log(error);
  })

}
function district() {
  fetch("/district", {
    method: "GET",
  }).then((response) => {
    return response.json();
  }).then((data) => {
    var years = [];
    var counts = [];
    var bar = [];
    data.forEach(element => {
      years.push(element["name"]);
      counts.push(element["count"]);
      bar.push({ name: element["name"], data: [element["count"]] });

    });
    var options = {
      series: counts,
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },


        }
      }],

      labels: years,
      dataLabels: {
        enabled: false,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"]
        }
      },
    };
    var baroptions = {

      series: bar,
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '90%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['District'],
      },

      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val;
        },
        style: {
          fontSize: '12px',
          colors: ["#000"]
        }
      },
      legend: {
        show: false
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      }



    };
    var chart = new ApexCharts(document.querySelector("#dist"), options);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#barDist"), baroptions);
    chart.render();
    document.querySelector("#district").classList.remove("animate-pulse")
    addRows(bar, "#district-tbl");
  }).catch((error) => {
    console.log(error);
  })

}

function board() {
  fetch("/board", {
    method: "GET",
  }).then((response) => {
    return response.json();
  }).then((data) => {
    var names = [];
    var counts = [];
    var bar = [];
    data.forEach(element => {
      names.push(element["name"]);
      counts.push(element["count"]);
      bar.push({ name: element["name"], data: [element["count"]] });

    });
    var options = {
      series: counts,
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },


        }
      }],
      legend: {
        position: 'bottom'
      },
      labels: names,
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"]
        }
      },
    };
    var chart = new ApexCharts(document.querySelector("#boardPie"), options);
    chart.render();
    document.querySelector("#board").classList.remove("animate-pulse")
    addRows(bar, "#board-tbl");
  }).catch((error) => {
    console.log(error);
  })

}
function community() {
  fetch("/community", {
    method: "GET",
  }).then((response) => {
    return response.json();
  }).then((data) => {
    var comm = [];
    var counts = [];
    var bar = [];
    data["comm"].forEach(element => {
      comm.push(element["_id"]);
      counts.push(element["count"]);
      bar.push({ name: element["_id"], data: [element["count"]] });

    });
    var options = {
      series: counts,
      chart: {
        type: 'donut',
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },


        }
      }],

      labels: comm,
      dataLabels: {
        enabled: false,
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#fff"]
        }
      },
    };
    var baroptions = {

      series: bar,
      chart: {
        type: 'bar',
        height: 350
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '90%',
          endingShape: 'rounded'
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: false,
        width: 2,
        colors: ['transparent']
      },
      xaxis: {
        categories: ['Community'],
      },

      dataLabels: {
        enabled: false,
        formatter: function (val) {
          return val;
        },
        style: {
          fontSize: '12px',
          colors: ["#000"]
        }
      },

      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: []
        }
      }



    };
    var chart = new ApexCharts(document.querySelector("#community"), options);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#barCommunity"), baroptions);
    chart.render();
    document.querySelector("#communityBlk").classList.remove("animate-pulse")

  }).catch((error) => {
    console.log(error);
  })

}

function addRows(array, id) {
  var i = 0;
  document.querySelector(id).innerHTML = "";

  array.forEach(element => {
    i += 1;
    var s = `<tr class="bg-white border-b border-gray-50">
    <th scope = "row" class="px-6 py-3.5 font-medium text-gray-900 whitespace-nowrap">
      ${i}
    </th>
    <td class="px-6 py-3.5">
      ${element["name"]}
    </td>
    <td class="px-6 py-3.5">
      ${element["data"]}
    </td>
  </tr > `;
    document.querySelector(id).innerHTML += s;
  });

}