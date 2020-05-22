# Foundry VTT Rollable Tables Repository

### To use these tables:
1. Download the `.json` file to your machine
2. Create a new rollable table in foundry
3. Right click the table in the sidebar and click import
4. Import your `.json` file and celebrate

### Why are there no tables from DnDBeyond?
Most of those tables are property of Wizards of the Coast, however there is a wonderful script that you can use to create your own .json rollable table file to import into foundry. See: [useful_scripts/DnDBeyond_extractor.js](useful_scripts/DnDBeyond_extractor.js)

### Macros
You may want to utilize macros with these rollable tables. Checkout [the foundry community macro repo](https://github.com/foundry-vtt-community/macros)

### Contributing
1. Navigate to the directory where you wish to add your file
2. Click on add file at the top
3. Name your file with a `.json` ending and paste your content and save (add details in the description field of your `.json` file)
4. Save the file and then open a pull request (GitHub should walk you through these steps)

If you have *multiple files that should be grouped together* and may use a macro, please create a new directory that houses everything and add a README.md file to the directory

### Cloning this Repo

To clone this repository, along with every table in it, use the following command:

```
git clone --recurse-submodules https://github.com/foundry-vtt-community/rollable_tables.git
```

Instead, if you'd like to clone this repository and only fetch a specific table from it, use the following commands:

```
git clone https://github.com/foundry-vtt-community/rollable_tables.git
cd rollable_tables
git submodule init
git submodule update name-of-the-table
```
