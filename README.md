# Belly Button Biodiversity

![image](https://user-images.githubusercontent.com/68877571/116639658-a1054900-a92e-11eb-9430-22b2685254c6.png)

I build an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Step 1: Plotly
 Use the D3 library to read in samples.json.
 Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
 
![image](https://user-images.githubusercontent.com/68877571/116641237-eecf8080-a931-11eb-8f5b-d04abfe3634f.png)

 Create a bubble chart that displays each sample.
 
 ![image](https://user-images.githubusercontent.com/68877571/116641309-11619980-a932-11eb-93cd-a5567fa242a8.png)
 
Display the sample metadata, i.e., an individual's demographic information.
Display each key-value pair from the metadata JSON object.


About the Data
Hulcr, J. et al.(2012) A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable. Retrieved from: http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/
