var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_DarkGray_1 = new ol.layer.Tile({
            'title': 'Dark Gray',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Erreichbarkeit_rzte_2 = new ol.format.GeoJSON();
var features_Erreichbarkeit_rzte_2 = format_Erreichbarkeit_rzte_2.readFeatures(json_Erreichbarkeit_rzte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erreichbarkeit_rzte_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erreichbarkeit_rzte_2.addFeatures(features_Erreichbarkeit_rzte_2);
var lyr_Erreichbarkeit_rzte_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erreichbarkeit_rzte_2, 
                style: style_Erreichbarkeit_rzte_2,
                popuplayertitle: 'Erreichbarkeit_Ärzte',
                interactive: true,
    title: 'Erreichbarkeit_Ärzte<br />\
    <img src="styles/legend/Erreichbarkeit_rzte_2_0.png" /> ≤ 5 min<br />\
    <img src="styles/legend/Erreichbarkeit_rzte_2_1.png" /> 5 - 10 min<br />\
    <img src="styles/legend/Erreichbarkeit_rzte_2_2.png" /> 10 - 15 min<br />\
    <img src="styles/legend/Erreichbarkeit_rzte_2_3.png" /> > 15 min<br />' });
var format_Erreichbarkeit_Kultureinrichtungen_3 = new ol.format.GeoJSON();
var features_Erreichbarkeit_Kultureinrichtungen_3 = format_Erreichbarkeit_Kultureinrichtungen_3.readFeatures(json_Erreichbarkeit_Kultureinrichtungen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erreichbarkeit_Kultureinrichtungen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erreichbarkeit_Kultureinrichtungen_3.addFeatures(features_Erreichbarkeit_Kultureinrichtungen_3);
var lyr_Erreichbarkeit_Kultureinrichtungen_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erreichbarkeit_Kultureinrichtungen_3, 
                style: style_Erreichbarkeit_Kultureinrichtungen_3,
                popuplayertitle: 'Erreichbarkeit_Kultureinrichtungen',
                interactive: true,
    title: 'Erreichbarkeit_Kultureinrichtungen<br />\
    <img src="styles/legend/Erreichbarkeit_Kultureinrichtungen_3_0.png" /> ≤ 5 min <br />\
    <img src="styles/legend/Erreichbarkeit_Kultureinrichtungen_3_1.png" /> 5 - 10 min<br />\
    <img src="styles/legend/Erreichbarkeit_Kultureinrichtungen_3_2.png" /> 10 - 15 min<br />\
    <img src="styles/legend/Erreichbarkeit_Kultureinrichtungen_3_3.png" /> > 15 min<br />' });
var format_Erreichbarkeit_Kindergrten_4 = new ol.format.GeoJSON();
var features_Erreichbarkeit_Kindergrten_4 = format_Erreichbarkeit_Kindergrten_4.readFeatures(json_Erreichbarkeit_Kindergrten_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erreichbarkeit_Kindergrten_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erreichbarkeit_Kindergrten_4.addFeatures(features_Erreichbarkeit_Kindergrten_4);
var lyr_Erreichbarkeit_Kindergrten_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erreichbarkeit_Kindergrten_4, 
                style: style_Erreichbarkeit_Kindergrten_4,
                popuplayertitle: 'Erreichbarkeit_Kindergärten',
                interactive: true,
    title: 'Erreichbarkeit_Kindergärten<br />\
    <img src="styles/legend/Erreichbarkeit_Kindergrten_4_0.png" /> < 5 min<br />\
    <img src="styles/legend/Erreichbarkeit_Kindergrten_4_1.png" /> 5 - 10 min<br />\
    <img src="styles/legend/Erreichbarkeit_Kindergrten_4_2.png" /> 10 - 15 min<br />\
    <img src="styles/legend/Erreichbarkeit_Kindergrten_4_3.png" /> > 15 min<br />' });
var format_Erreichbarkeit_Schule_5 = new ol.format.GeoJSON();
var features_Erreichbarkeit_Schule_5 = format_Erreichbarkeit_Schule_5.readFeatures(json_Erreichbarkeit_Schule_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erreichbarkeit_Schule_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erreichbarkeit_Schule_5.addFeatures(features_Erreichbarkeit_Schule_5);
var lyr_Erreichbarkeit_Schule_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erreichbarkeit_Schule_5, 
                style: style_Erreichbarkeit_Schule_5,
                popuplayertitle: 'Erreichbarkeit_Schule',
                interactive: true,
    title: 'Erreichbarkeit_Schule<br />\
    <img src="styles/legend/Erreichbarkeit_Schule_5_0.png" /> ≤ 5 min<br />\
    <img src="styles/legend/Erreichbarkeit_Schule_5_1.png" /> 5 - 10 min<br />\
    <img src="styles/legend/Erreichbarkeit_Schule_5_2.png" /> 10 - 15 min<br />\
    <img src="styles/legend/Erreichbarkeit_Schule_5_3.png" /> > 15 min<br />' });
var format_Aerzte_6 = new ol.format.GeoJSON();
var features_Aerzte_6 = format_Aerzte_6.readFeatures(json_Aerzte_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aerzte_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aerzte_6.addFeatures(features_Aerzte_6);
var lyr_Aerzte_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Aerzte_6, 
                style: style_Aerzte_6,
                popuplayertitle: 'Aerzte',
                interactive: false,
                title: '<img src="styles/legend/Aerzte_6.png" /> Aerzte'
            });
var format_Schule_7 = new ol.format.GeoJSON();
var features_Schule_7 = format_Schule_7.readFeatures(json_Schule_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Schule_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Schule_7.addFeatures(features_Schule_7);
var lyr_Schule_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Schule_7, 
                style: style_Schule_7,
                popuplayertitle: 'Schule',
                interactive: false,
                title: '<img src="styles/legend/Schule_7.png" /> Schule'
            });
var format_Kindergaerten_8 = new ol.format.GeoJSON();
var features_Kindergaerten_8 = format_Kindergaerten_8.readFeatures(json_Kindergaerten_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kindergaerten_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kindergaerten_8.addFeatures(features_Kindergaerten_8);
var lyr_Kindergaerten_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kindergaerten_8, 
                style: style_Kindergaerten_8,
                popuplayertitle: 'Kindergaerten',
                interactive: false,
                title: '<img src="styles/legend/Kindergaerten_8.png" /> Kindergaerten'
            });
var format_Kultureinrichtungen_u_kirche_9 = new ol.format.GeoJSON();
var features_Kultureinrichtungen_u_kirche_9 = format_Kultureinrichtungen_u_kirche_9.readFeatures(json_Kultureinrichtungen_u_kirche_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kultureinrichtungen_u_kirche_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kultureinrichtungen_u_kirche_9.addFeatures(features_Kultureinrichtungen_u_kirche_9);
var lyr_Kultureinrichtungen_u_kirche_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kultureinrichtungen_u_kirche_9, 
                style: style_Kultureinrichtungen_u_kirche_9,
                popuplayertitle: 'Kultureinrichtungen_u_kirche',
                interactive: false,
    title: 'Kultureinrichtungen_u_kirche<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_9_0.png" /> Kino<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_9_1.png" /> Bibliothek<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_9_2.png" /> Religiöse Einrichtung<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_9_3.png" /> Rathaus<br />\
    <img src="styles/legend/Kultureinrichtungen_u_kirche_9_4.png" /> Sehenswürdigkeit<br />' });
var group_POIs = new ol.layer.Group({
                                layers: [lyr_Aerzte_6,lyr_Schule_7,lyr_Kindergaerten_8,lyr_Kultureinrichtungen_u_kirche_9,],
                                fold: 'close',
                                title: 'POIs'});
var group_Buildings_spatialJoin = new ol.layer.Group({
                                layers: [lyr_Erreichbarkeit_rzte_2,lyr_Erreichbarkeit_Kultureinrichtungen_3,lyr_Erreichbarkeit_Kindergrten_4,lyr_Erreichbarkeit_Schule_5,],
                                fold: 'close',
                                title: 'Buildings_spatial Join'});

lyr_OpenStreetMap_0.setVisible(true);lyr_DarkGray_1.setVisible(true);lyr_Erreichbarkeit_rzte_2.setVisible(true);lyr_Erreichbarkeit_Kultureinrichtungen_3.setVisible(true);lyr_Erreichbarkeit_Kindergrten_4.setVisible(true);lyr_Erreichbarkeit_Schule_5.setVisible(true);lyr_Aerzte_6.setVisible(true);lyr_Schule_7.setVisible(true);lyr_Kindergaerten_8.setVisible(true);lyr_Kultureinrichtungen_u_kirche_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DarkGray_1,group_Buildings_spatialJoin,group_POIs];
lyr_Erreichbarkeit_rzte_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'err_min': 'err_min', 'dr_AA_MODE': 'dr_AA_MODE', 'stadtteil': 'stadtteil', });
lyr_Erreichbarkeit_Kultureinrichtungen_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'stadtteil': 'stadtteil', 'err_min': 'err_min', 'kultur_AA_MODE': 'kultur_AA_MODE', });
lyr_Erreichbarkeit_Kindergrten_4.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'stadtteil': 'stadtteil', 'err_min': 'err_min', 'kindergaerten_AA_MODE': 'kindergaerten_AA_MODE', });
lyr_Erreichbarkeit_Schule_5.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'building': 'building', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'stadtteil': 'stadtteil', 'err_min': 'err_min', 'schule_AA_MODE': 'schule_AA_MODE', });
lyr_Aerzte_6.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'healthcare': 'healthcare', 'amenity': 'amenity', 'opening_hours:covid19': 'opening_hours:covid19', 'level': 'level', 'contact:phone': 'contact:phone', 'website': 'website', 'wheelchair': 'wheelchair', 'healthcare:speciality': 'healthcare:speciality', 'check_date:opening_hours': 'check_date:opening_hours', 'phone': 'phone', 'operator': 'operator', 'opening_hours': 'opening_hours', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', });
lyr_Schule_7.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'operator:type': 'operator:type', 'isced:level': 'isced:level', 'contact:website': 'contact:website', 'education': 'education', 'check_date': 'check_date', 'material': 'material', 'height': 'height', 'barrier': 'barrier', 'building:levels': 'building:levels', 'website': 'website', 'religion': 'religion', 'building': 'building', 'addr:country': 'addr:country', 'phone': 'phone', 'name': 'name', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'ignore_amenity_school_full_id': 'ignore_amenity_school_full_id', 'ignore_amenity_school_osm_type': 'ignore_amenity_school_osm_type', 'ignore_amenity_school_amenity': 'ignore_amenity_school_amenity', 'ignore_amenity_school_public_transport': 'ignore_amenity_school_public_transport', 'ignore_amenity_school_operator': 'ignore_amenity_school_operator', 'ignore_amenity_school_bus': 'ignore_amenity_school_bus', 'ignore_amenity_school_entrance': 'ignore_amenity_school_entrance', 'ignore_amenity_school_maxwidth': 'ignore_amenity_school_maxwidth', 'ignore_amenity_school_maxheight': 'ignore_amenity_school_maxheight', 'ignore_amenity_school_barrier': 'ignore_amenity_school_barrier', 'ignore_amenity_school_wheelchair': 'ignore_amenity_school_wheelchair', 'ignore_amenity_school_website': 'ignore_amenity_school_website', 'ignore_amenity_school_phone': 'ignore_amenity_school_phone', 'ignore_amenity_school_addr:street': 'ignore_amenity_school_addr:street', 'ignore_amenity_school_addr:postcode': 'ignore_amenity_school_addr:postcode', 'ignore_amenity_school_addr:housenumber': 'ignore_amenity_school_addr:housenumber', 'ignore_amenity_school_addr:country': 'ignore_amenity_school_addr:country', 'ignore_amenity_school_addr:city': 'ignore_amenity_school_addr:city', 'ignore_amenity_school_name': 'ignore_amenity_school_name', });
lyr_Kindergaerten_8.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'website': 'website', 'operator': 'operator', 'contact:website': 'contact:website', 'capacity': 'capacity', 'building': 'building', 'phone': 'phone', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'name': 'name', });
lyr_Kultureinrichtungen_u_kirche_9.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'tourism': 'tourism', 'ref': 'ref', 'operator': 'operator', 'description': 'description', 'contact:facebook': 'contact:facebook', 'checkpoint:type': 'checkpoint:type', 'checkpoint': 'checkpoint', 'toilets:wheelchair': 'toilets:wheelchair', 'museum': 'museum', 'contact:website': 'contact:website', 'contact:phone': 'contact:phone', 'contact:email': 'contact:email', 'width': 'width', 'entrance': 'entrance', 'comment': 'comment', 'service_times': 'service_times', 'check_date': 'check_date', 'ref:isil': 'ref:isil', 'opening_hours': 'opening_hours', 'email': 'email', 'building': 'building', 'designation': 'designation', 'natural': 'natural', 'height': 'height', 'wikidata': 'wikidata', 'website': 'website', 'religion': 'religion', 'phone': 'phone', 'denomination': 'denomination', 'addr:street': 'addr:street', 'addr:postcode': 'addr:postcode', 'addr:housenumber': 'addr:housenumber', 'addr:country': 'addr:country', 'addr:city': 'addr:city', 'wikimedia_commons': 'wikimedia_commons', 'ref:lda': 'ref:lda', 'man_made': 'man_made', 'lda:criteria': 'lda:criteria', 'image': 'image', 'heritage:operator': 'heritage:operator', 'heritage': 'heritage', 'wheelchair': 'wheelchair', 'name': 'name', });
lyr_Erreichbarkeit_rzte_2.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'err_min': 'Range', 'dr_AA_MODE': 'TextEdit', 'stadtteil': 'TextEdit', });
lyr_Erreichbarkeit_Kultureinrichtungen_3.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'stadtteil': 'TextEdit', 'err_min': 'Range', 'kultur_AA_MODE': 'TextEdit', });
lyr_Erreichbarkeit_Kindergrten_4.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'stadtteil': 'TextEdit', 'err_min': 'Range', 'kindergaerten_AA_MODE': 'TextEdit', });
lyr_Erreichbarkeit_Schule_5.set('fieldImages', {'fid': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'stadtteil': 'TextEdit', 'err_min': 'Range', 'schule_AA_MODE': 'TextEdit', });
lyr_Aerzte_6.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'healthcare': '', 'amenity': '', 'opening_hours:covid19': '', 'level': '', 'contact:phone': '', 'website': '', 'wheelchair': '', 'healthcare:speciality': '', 'check_date:opening_hours': '', 'phone': '', 'operator': '', 'opening_hours': '', 'name': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', });
lyr_Schule_7.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'operator:type': 'TextEdit', 'isced:level': 'TextEdit', 'contact:website': 'TextEdit', 'education': 'TextEdit', 'check_date': 'TextEdit', 'material': 'TextEdit', 'height': 'TextEdit', 'barrier': 'TextEdit', 'building:levels': 'TextEdit', 'website': 'TextEdit', 'religion': 'TextEdit', 'building': 'TextEdit', 'addr:country': 'TextEdit', 'phone': 'TextEdit', 'name': 'TextEdit', 'addr:street': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'ignore_amenity_school_full_id': '', 'ignore_amenity_school_osm_type': '', 'ignore_amenity_school_amenity': '', 'ignore_amenity_school_public_transport': '', 'ignore_amenity_school_operator': '', 'ignore_amenity_school_bus': '', 'ignore_amenity_school_entrance': '', 'ignore_amenity_school_maxwidth': '', 'ignore_amenity_school_maxheight': '', 'ignore_amenity_school_barrier': '', 'ignore_amenity_school_wheelchair': '', 'ignore_amenity_school_website': '', 'ignore_amenity_school_phone': '', 'ignore_amenity_school_addr:street': '', 'ignore_amenity_school_addr:postcode': '', 'ignore_amenity_school_addr:housenumber': '', 'ignore_amenity_school_addr:country': '', 'ignore_amenity_school_addr:city': '', 'ignore_amenity_school_name': '', });
lyr_Kindergaerten_8.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'website': '', 'operator': '', 'contact:website': '', 'capacity': '', 'building': '', 'phone': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:city': '', 'name': '', });
lyr_Kultureinrichtungen_u_kirche_9.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'tourism': '', 'ref': '', 'operator': '', 'description': '', 'contact:facebook': '', 'checkpoint:type': '', 'checkpoint': '', 'toilets:wheelchair': '', 'museum': '', 'contact:website': '', 'contact:phone': '', 'contact:email': '', 'width': '', 'entrance': '', 'comment': '', 'service_times': '', 'check_date': '', 'ref:isil': '', 'opening_hours': '', 'email': '', 'building': '', 'designation': '', 'natural': '', 'height': '', 'wikidata': '', 'website': '', 'religion': '', 'phone': '', 'denomination': '', 'addr:street': '', 'addr:postcode': '', 'addr:housenumber': '', 'addr:country': '', 'addr:city': '', 'wikimedia_commons': '', 'ref:lda': '', 'man_made': '', 'lda:criteria': '', 'image': '', 'heritage:operator': '', 'heritage': '', 'wheelchair': '', 'name': '', });
lyr_Erreichbarkeit_rzte_2.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'building': 'hidden field', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'err_min': 'header label - always visible', 'dr_AA_MODE': 'header label - visible with data', 'stadtteil': 'inline label - visible with data', });
lyr_Erreichbarkeit_Kultureinrichtungen_3.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'building': 'hidden field', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'err_min': 'header label - always visible', 'kultur_AA_MODE': 'header label - visible with data', });
lyr_Erreichbarkeit_Kindergrten_4.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'building': 'hidden field', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'err_min': 'header label - always visible', 'kindergaerten_AA_MODE': 'header label - visible with data', });
lyr_Erreichbarkeit_Schule_5.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'building': 'hidden field', 'addr:street': 'inline label - visible with data', 'addr:postcode': 'inline label - visible with data', 'addr:housenumber': 'inline label - visible with data', 'stadtteil': 'inline label - visible with data', 'err_min': 'header label - always visible', 'schule_AA_MODE': 'header label - visible with data', });
lyr_Aerzte_6.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'healthcare': 'no label', 'amenity': 'no label', 'opening_hours:covid19': 'no label', 'level': 'no label', 'contact:phone': 'no label', 'website': 'no label', 'wheelchair': 'no label', 'healthcare:speciality': 'no label', 'check_date:opening_hours': 'no label', 'phone': 'no label', 'operator': 'no label', 'opening_hours': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', });
lyr_Schule_7.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'operator:type': 'no label', 'isced:level': 'no label', 'contact:website': 'no label', 'education': 'no label', 'check_date': 'no label', 'material': 'no label', 'height': 'no label', 'barrier': 'no label', 'building:levels': 'no label', 'website': 'no label', 'religion': 'no label', 'building': 'no label', 'addr:country': 'no label', 'phone': 'no label', 'name': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'ignore_amenity_school_full_id': 'no label', 'ignore_amenity_school_osm_type': 'no label', 'ignore_amenity_school_amenity': 'no label', 'ignore_amenity_school_public_transport': 'no label', 'ignore_amenity_school_operator': 'no label', 'ignore_amenity_school_bus': 'no label', 'ignore_amenity_school_entrance': 'no label', 'ignore_amenity_school_maxwidth': 'no label', 'ignore_amenity_school_maxheight': 'no label', 'ignore_amenity_school_barrier': 'no label', 'ignore_amenity_school_wheelchair': 'no label', 'ignore_amenity_school_website': 'no label', 'ignore_amenity_school_phone': 'no label', 'ignore_amenity_school_addr:street': 'no label', 'ignore_amenity_school_addr:postcode': 'no label', 'ignore_amenity_school_addr:housenumber': 'no label', 'ignore_amenity_school_addr:country': 'no label', 'ignore_amenity_school_addr:city': 'no label', 'ignore_amenity_school_name': 'no label', });
lyr_Kindergaerten_8.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'website': 'no label', 'operator': 'no label', 'contact:website': 'no label', 'capacity': 'no label', 'building': 'no label', 'phone': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'name': 'no label', });
lyr_Kultureinrichtungen_u_kirche_9.set('fieldLabels', {'fid': 'hidden field', 'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'amenity': 'hidden field', 'tourism': 'hidden field', 'ref': 'hidden field', 'operator': 'hidden field', 'description': 'no label', 'contact:facebook': 'no label', 'checkpoint:type': 'no label', 'checkpoint': 'no label', 'toilets:wheelchair': 'no label', 'museum': 'no label', 'contact:website': 'no label', 'contact:phone': 'no label', 'contact:email': 'no label', 'width': 'no label', 'entrance': 'no label', 'comment': 'no label', 'service_times': 'no label', 'check_date': 'no label', 'ref:isil': 'no label', 'opening_hours': 'no label', 'email': 'no label', 'building': 'no label', 'designation': 'no label', 'natural': 'no label', 'height': 'no label', 'wikidata': 'no label', 'website': 'no label', 'religion': 'no label', 'phone': 'no label', 'denomination': 'no label', 'addr:street': 'no label', 'addr:postcode': 'no label', 'addr:housenumber': 'no label', 'addr:country': 'no label', 'addr:city': 'no label', 'wikimedia_commons': 'no label', 'ref:lda': 'no label', 'man_made': 'no label', 'lda:criteria': 'no label', 'image': 'no label', 'heritage:operator': 'no label', 'heritage': 'no label', 'wheelchair': 'no label', 'name': 'no label', });
lyr_Kultureinrichtungen_u_kirche_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});