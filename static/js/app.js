function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata= data.metadata;
      var resultarray= metadata.filter(sampleobject => sampleobject.id == sample);
      var result= resultarray[0]
      var PANEL = d3.select("#sample-metadata");
      PANEL.html("");
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key}: ${value}`);
      });
    
    });
  }

  function init() {
    var selector = d3.select("#selDataset");
    d3.json("samples.json").then((data) => {
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  
      const firstSample = sampleNames[0];
      buildCharts(firstSample);
      buildMetadata(firstSample);
    });
  }
  
  function optionChanged(newSample) {
    buildCharts(newSample);
    buildMetadata(newSample);
  }
  
  init();


function buildCharts(sample) {

  d3.json("samples.json").then((data) => {
    var samples= data.samples;
    var resultarray= samples.filter(sampleobject => sampleobject.id == sample);
    var result= resultarray[0]

    var ids = result.otu_ids;
    var labels = result.otu_labels;
    var values = result.sample_values;

    //Barchart
    var bar_data =[
      {
        y:ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
        x:values.slice(0,10).reverse(),
        text:labels.slice(0,10).reverse(),
        type:"bar",
        orientation:"h"

      }
    ];

    var barLayout = {
      title: "Top 10 Bacteria Found",
      margin: { t: 50, l: 200 }
    };
    Plotly.newPlot("bar", bar_data, barLayout);

    // Bubble Chart
    var LayoutBubble = {
        margin: { t: 0 },
        xaxis: { title: "OTU Id's" },
        hovermode: "closest",
        };
  
    var DataBubble = [
        {
          x: ids,
          y: values,
          text: labels,
          mode: "markers",
          marker: {
            color: ids,
            size: values,
            }
        }
    ];
      Plotly.plot("bubble", DataBubble, LayoutBubble);    
  });
}
   
 
