const DashboardCalc = {
    CalcDashboard: function (marketUnitsData, marketSkinsData, marketLordsData, marketPacksData, walletData) {

        // Made head object
        let head = {
            wallet: '',
            units: {
                c_total: 0,
                u_total: 0,
                r_total: 0,
                total: 0,
                c_amount: 0,
                u_amount: 0,
                r_amount: 0,
                amount: 0,
            },
            skins: {
                e_total: 0,
                l_total: 0,
                total: 0,
                e_amount: 0,
                l_amount: 0,
                amount: 0,
            },
                lords: {
                lords: [],
                total: 0
            },
                packs: {
                packs: [],
                total: 0
            },
                general: {
                total: 0
            }
        };

        // Calc Units Total
        if (marketUnitsData && Array.isArray(marketUnitsData) && marketUnitsData.length > 0)
        {
            marketUnitsData.map((unit) => {
            if (typeof walletData !== 'undefined' && 'units' in walletData && walletData.units !== null) {
                const walletItem = walletData.units.find((item) => item.unit.replace(/\s/g, '').toLowerCase() === unit.unit.replace(/\s/g, '').toLowerCase());
                if (typeof walletItem !== 'undefined') {
                    if (walletItem.hasOwnProperty('common'))
                    {
                        head.units.c_total += parseFloat(walletItem.common) * parseFloat(unit.c_price);
                        head.units.c_amount += parseFloat(walletItem.common);
                    }
                    if (walletItem.hasOwnProperty('uncommon'))
                    {
                        head.units.u_total += parseFloat(walletItem.uncommon) * parseFloat(unit.u_price);
                        head.units.u_amount += parseFloat(walletItem.uncommon);
                    }
                    if (walletItem.hasOwnProperty('rare'))
                    {
                        head.units.r_total += parseFloat(walletItem.rare) * parseFloat(unit.r_price);
                        head.units.r_amount += parseFloat(walletItem.rare);
                    }
                }
            }
            });
            head.units.total = head.units.c_total + head.units.u_total + head.units.r_total;
            head.units.amount = head.units.c_amount + head.units.u_amount + head.units.r_amount;
        }

        // Calc Skins Total
        if (marketSkinsData && Array.isArray(marketSkinsData) && marketSkinsData.length > 0)
        {
            marketSkinsData.map((skin) => {
            if (typeof walletData !== 'undefined' && 'skins' in walletData && walletData.skins !== null) {
                const walletItem = walletData.skins.find((item) => item.unit.replace(/\s/g, '').toLowerCase() === skin.unit.replace(/\s/g, '').toLowerCase());
                if (typeof walletItem !== 'undefined') {
                    if (walletItem.hasOwnProperty('epic'))
                    {
                        head.skins.e_total += parseFloat(walletItem.epic) * parseFloat(skin.e_price);
                        head.skins.e_amount += parseFloat(walletItem.epic);
                    }
                    if (walletItem.hasOwnProperty('legendary'))
                    {
                        head.skins.l_total += parseFloat(walletItem.legendary) * parseFloat(skin.l_price);
                        head.skins.l_amount += parseFloat(walletItem.legendary);
                    }
                }
            }
            });
            head.skins.total = head.skins.e_total + head.skins.l_total;
            head.skins.amount = head.skins.e_amount + head.skins.l_amount;
        }

        // Calc Lords
        if (typeof walletData !== 'undefined' && 'lords' in walletData && walletData.lords !== null)
        {
            walletData.lords.map((walletLord) => {
            if (typeof marketLordsData !== 'undefined') {
                const marketItem = marketLordsData.find((item) => item.unit.replace(/\s/g, '').toLowerCase() === walletLord.unit.replace(/\s/g, '').toLowerCase());
                if (typeof marketItem !== 'undefined') {
                const tPrice = parseFloat(walletLord.amount) * parseFloat(marketItem.price);
                head.lords.lords.push({
                    name: walletLord.amount + 'x ' + marketItem.unit.charAt(0).toUpperCase() + marketItem.unit.substring(1) + ' Lord',
                    type: marketItem.unit,
                    total: tPrice
                });
                head.lords.total += tPrice;
                }
            }
            });
        }

        // Calc Packs
        if (typeof walletData !== 'undefined' && 'packs' in walletData && walletData.packs !== null)
        {
            walletData.packs.map((walletPack) => {
            if (typeof marketPacksData !== 'undefined') {
                const marketItem = marketPacksData.find((item) => item.unit.replace(/\s/g, '').toLowerCase() === walletPack.unit.replace(/\s/g, '').toLowerCase());
                if (typeof marketItem !== 'undefined') {
                const tPrice = parseFloat(walletPack.amount) * parseFloat(marketItem.price);
                head.packs.packs.push({
                    name: walletPack.amount + 'x ' + marketItem.unit.charAt(0).toUpperCase() + marketItem.unit.substring(1) + ' Pack',
                    total: tPrice
                });
                head.packs.total += tPrice;
                }
            }
            });
        }

        // Calc Total
        head.general.total = head.units.total + head.skins.total + head.lords.total + head.packs.total;
        
        return head;
    }
  };
  
  export default DashboardCalc;
  