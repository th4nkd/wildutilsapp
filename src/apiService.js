import axios from 'axios';

const RONIN_API_KEY = process.env.REACT_APP_RONIN_API_KEY;
const WILDUTILS_API_KEY = process.env.REACT_APP_WILDUTILS_API_KEY;
const WILDUTILS_URL = process.env.REACT_APP_WILDUTILS_URL;

async function callEndpoint(contract, wallet, limit, offset) {
    try {
        let data = JSON.stringify({
            "contractAddresses": [
                contract
            ],
            "ownerAddress": wallet,
            "paging": {
              "limit": limit,
              "offset": offset,
              "pagingStyle": "offset"
            }
          });

        const response = await axios.post(
            'https://api-gateway.skymavis.com/skynet/ronin/nfts/search',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-API-KEY': RONIN_API_KEY
                }
            }
        );

        return response.data.result;
    } catch (error) {
        throw error;
    }
}

async function fetchAllItems(contract, wallet) {
    try {
        let allItems = [];
        let offset = 0;
        let total = 0;

        do {
            const response = await callEndpoint(contract, wallet, 200, offset);
            const items = response.items;
            total = response.paging.total;

            allItems = allItems.concat(items);
            offset += 200;
        } while (allItems.length < total);

        return allItems;
    } catch (error) {
        throw error;
    }
}

async function GetWalletUnits(wallet) {
    try {
        const UNITS_CONTRACT = '0xa038c593115f6fcd673f6833e15462b475994879';
        const items = await fetchAllItems(UNITS_CONTRACT, wallet);
        const occurrences = {};

        for (const item of items) {
            let unit = '';
            let rarity;

            if (item.rawMetadata) {
                unit = item.rawMetadata.properties.type.toLowerCase();
                rarity = item.rawMetadata.properties.rarity;
            } else if (item.tokenURI && item.tokenURI != '') {
                // try to fetch direct in metadata URI
                const response = await fetch(item.tokenURI);
                if (response.status == 200)
                {
                    const metadata = await response.json();
                    if (metadata.properties)
                    {
                        unit = metadata.properties.type.toLowerCase();
                        rarity = metadata.properties.rarity;
                    }
                }
            }

            if (unit != '') {
                if (!occurrences[unit]) {
                    occurrences[unit] = { unit };
                }

                if (occurrences[unit][rarity.toLowerCase()]) {
                    occurrences[unit][rarity.toLowerCase()]++;
                } else {
                    occurrences[unit][rarity.toLowerCase()] = 1;
                }
            }
        }

        return Object.values(occurrences);
    } catch (error) {
        throw error;
    }
}

async function GetWalletSkins(wallet) {
    try {
        const SKINS_CONTRACT = '0xa899849929e113315200609be208e6a0858f645c';
        const items = await fetchAllItems(SKINS_CONTRACT, wallet);
        const occurrences = {};

        for (const item of items) {
            let unit = '';
            let rarity;

            if (item.rawMetadata) {
                unit = item.rawMetadata.properties.unit.toLowerCase();
                rarity = item.rawMetadata.properties.rarity;
            } else if (item.tokenURI && item.tokenURI != '') {
                // try to fetch direct in metadata URI
                const response = await fetch(item.tokenURI);
                if (response.status == 200)
                {
                    const metadata = await response.json();
                    if (metadata.properties)
                    {
                        unit = metadata.properties.unit.toLowerCase();
                        rarity = metadata.properties.rarity;
                    }
                }
            }

            if (unit != '') {
                if (!occurrences[unit]) {
                    occurrences[unit] = { unit };
                }

                if (occurrences[unit][rarity.toLowerCase()]) {
                    occurrences[unit][rarity.toLowerCase()]++;
                } else {
                    occurrences[unit][rarity.toLowerCase()] = 1;
                }
            }
        }

        return Object.values(occurrences);
    } catch (error) {
        throw error;
    }
}

async function GetWalletLords(wallet) {
    try {
        const LORDS_CONTRACT = '0xa1ce53b661be73bf9a5edd3f0087484f0e3e7363';
        const items = await fetchAllItems(LORDS_CONTRACT, wallet);
        const occurrences = {};

        for (const item of items) {
            let unit = '';

            if (item.rawMetadata) {
                unit = item.rawMetadata.properties.rank.toLowerCase();
            } else if (item.tokenURI && item.tokenURI != '') {
                // try to fetch direct in metadata URI
                const response = await fetch(item.tokenURI);
                if (response.status == 200)
                {
                    const metadata = await response.json();
                    if (metadata.properties)
                    {
                        unit = metadata.properties.rank.toLowerCase();
                    }
                }
            }

            if (unit != '') {
                if (!occurrences[unit]) {
                    occurrences[unit] = { unit, amount : 1 };
                } else {
                    occurrences[unit]['amount']++;
                }
            }
        }

        return Object.values(occurrences);
    } catch (error) {
        throw error;
    }
}

async function GetWalletPacks(wallet) {
    try {
        const PACKS_CONTRACT = '0x0328b534d094b097020b4538230f998027a54db0';
        const occurrences = {};

        let data = JSON.stringify({
            "contractAddresses": [
                PACKS_CONTRACT
            ],
            "ownerAddress": wallet,
            "paging": {
                "limit": 10,
                "offset": 0,
                "pagingStyle": "offset"
            }
            });

        const response = await axios.post(
            'https://api-gateway.skymavis.com/skynet/ronin/tokens/balances/search',
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-API-KEY': RONIN_API_KEY
                }
            }
        );
        
        if (!response.data.result.items || response.data.result.items.length === 0) {
            return [];
        }

        response.data.result.items.forEach(item => {
            const unit = item.tokenId;
            const amount = item.balance;

            occurrences[unit] = { unit, amount : amount };
        });

        const ref = [
            { unit: '1', name: 'basic' },
            { unit: '2', name: 'basicplus' },
            { unit: '3', name: 'standard' },
            { unit: '4', name: 'premium' },
            { unit: '5', name: 'founder' }
        ];

        const occ = Object.values(occurrences);

        const transformedPacks = occ.map(pack => {
            const correspondingUnit = ref.find(item => item.unit === pack.unit);
            if (correspondingUnit) {
              return {
                unit: correspondingUnit.name,
                amount: pack.amount
              };
            } else {
              return pack;
            }
          });

        return transformedPacks;
    } catch (error) {
        throw error;
    }
}

async function calculateTotals(occurrences) {
    try {
        const totals = {
            total_common: 0,
            total_uncommon: 0,
            total_rare: 0
        };

        occurrences.forEach(item => {
            totals.total_common += item.common || 0;
            totals.total_uncommon += item.uncommon || 0;
            totals.total_rare += item.rare || 0;
        });

        return totals;
    } catch (error) {
        throw error;
    }
}

async function GetWalletData(wallet) {
    const result = {};

    try { 
        const units = await GetWalletUnits(wallet);
        result['units'] = units;
    } catch(error) { console.log('Error loading Units: ' + error.message); }

    try { 
        const skins = await GetWalletSkins(wallet);
        result['skins'] = skins;
    } catch(error) { console.log('Error loading Skins: ' + error.message); }

    try { 
        const lords = await GetWalletLords(wallet);
        result['lords'] = lords;
    } catch(error) { console.log('Error loading Lords: ' + error.message); }
    
    try { 
        const packs = await GetWalletPacks(wallet);
        result['packs'] = packs;
    } catch(error) { console.log('Error loading Packs: ' + error.message); }

    try {
        if (result.units)
        {
            const unitstotal = await calculateTotals(result.units);
            result['unitstotal'] = unitstotal;
        }
    } catch(error) { console.log('Error Calc. Totals: ' + error.message); }

    return result;
}

async function GetMarketData() {
    try {
        const response = await axios.get(
            WILDUTILS_URL, {
                headers: {
                    'x-api-key': WILDUTILS_API_KEY
                }
            });
        return response.data;
    } catch (error) {
        return "[]";
    }
}

async function GetRONPrice() {
    try {
        const response = await axios.get('https://api.coinlore.net/api/ticker/?id=64703', {});
        return response;
    } catch (error) {
        return "[]";
    }
}

export { GetWalletData, GetMarketData, GetRONPrice };