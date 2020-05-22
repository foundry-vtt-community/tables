# Foundry VTT Rollable Tables Repository

### To use these tables:
1. download the json file to your machine.
2. Create a new rollable table in foundry
3. Right click the table in the sidebar and click import.
4. Import your .json file and celebrate.

### Why are there no tables from DnDBeyond?
Most of those tables are property of Wizards of the Coast, however there is a wonderful script that you can use to create your own .json rollable table file to import into foundry. See: [useful_scripts/DnDBeyond_extractor.js](useful_scripts/DnDBeyond_extractor.js)

### Macros
You may want to utilize macros with these rollable tables. Checkout [the foundry community macro repo](https://github.com/foundry-vtt-community/macros)

## Cloning this Repo
![CI for Rollable Tables Repo](https://github.com/foundry-vtt-community/rollable_tables/workflows/CI%20for%20Rollable%20Tables%20Repo/badge.svg)

Foundry tables allow people to expand upon the default Foundry offerings are noted here.

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
