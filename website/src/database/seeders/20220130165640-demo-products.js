"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Milk - Condensed",
        shortDescription: "Chronic post-traumatic headache, intractable",
        longDescription: "Chronic post-traumatic headache, intractable",
        size_id: 3,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pastry - Carrot Muffin - Mini",
        shortDescription: "Trisomy 18, unspecified",
        longDescription: "Trisomy 18, unspecified",
        size_id: 1,
        material_id: 9,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pails With Lids",
        shortDescription: "Other internal derangements of unspecified knee",
        longDescription: "Other internal derangements of unspecified knee",
        size_id: 2,
        material_id: 5,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Oil - Shortening - All - Purpose",
        shortDescription: "Nondisp fx of intermed cuneiform of l ft, 7thK",
        longDescription:
          "Nondisplaced fracture of intermediate cuneiform of left foot, subsequent encounter for fracture with nonunion",
        size_id: 1,
        material_id: 6,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wasabi Paste",
        shortDescription:
          "Underdosing of other antidysrhythmic drugs, init encntr",
        longDescription:
          "Underdosing of other antidysrhythmic drugs, initial encounter",
        size_id: 3,
        material_id: 5,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Rice - Brown",
        shortDescription: "Salter-Harris Type IV physeal fracture of calcaneus",
        longDescription: "Salter-Harris Type IV physeal fracture of calcaneus",
        size_id: 3,
        material_id: 3,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cheese - Havarti, Salsa",
        shortDescription:
          "Pasngr in hv veh inj in clsn w rail trn/veh nontraf, sequela",
        longDescription:
          "Passenger in heavy transport vehicle injured in collision with railway train or railway vehicle in nontraffic accident, sequela",
        size_id: 3,
        material_id: 4,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bacardi Mojito",
        shortDescription: "Injury of peritoneum, sequela",
        longDescription: "Injury of peritoneum, sequela",
        size_id: 3,
        material_id: 8,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wasabi Paste",
        shortDescription:
          "Lacerat musc/fasc/tend long hd bicep, right arm, sequela",
        longDescription:
          "Laceration of muscle, fascia and tendon of long head of biceps, right arm, sequela",
        size_id: 3,
        material_id: 6,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cherries - Bing, Canned",
        shortDescription: "Radial collateral ligament sprain of left elbow",
        longDescription: "Radial collateral ligament sprain of left elbow",
        size_id: 1,
        material_id: 7,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jolt Cola - Electric Blue",
        shortDescription:
          "Nondisp fx of capitate bone, l wrist, subs for fx w nonunion",
        longDescription:
          "Nondisplaced fracture of capitate [os magnum] bone, left wrist, subsequent encounter for fracture with nonunion",
        size_id: 2,
        material_id: 4,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Hold Up Tool Storage Rack",
        shortDescription:
          "Acustc neuritis in infec/parastc dis classd elswhr, unsp ear",
        longDescription:
          "Acoustic neuritis in infectious and parasitic diseases classified elsewhere, unspecified ear",
        size_id: 2,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Flax Seed",
        shortDescription: "Unspecified injury of thorax",
        longDescription: "Unspecified injury of thorax",
        size_id: 3,
        material_id: 9,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pepper - Red Chili",
        shortDescription: "Other secondary osteonecrosis of unspecified ulna",
        longDescription: "Other secondary osteonecrosis of unspecified ulna",
        size_id: 3,
        material_id: 2,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wine - Casillero Deldiablo",
        shortDescription: "Cellulitis of orbit",
        longDescription: "Cellulitis of orbit",
        size_id: 3,
        material_id: 2,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lamb - Leg, Bone In",
        shortDescription:
          "War operations involving explosion of marine weapons",
        longDescription: "War operations involving explosion of marine weapons",
        size_id: 1,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Fish - Base, Bouillion",
        shortDescription:
          "Unsp athscl nonbiol bypass of the extrm, bilateral legs",
        longDescription:
          "Unspecified atherosclerosis of nonbiological bypass graft(s) of the extremities, bilateral legs",
        size_id: 3,
        material_id: 4,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Stock - Beef, White",
        shortDescription:
          "Preterm labor without delivery, unspecified trimester",
        longDescription:
          "Preterm labor without delivery, unspecified trimester",
        size_id: 2,
        material_id: 5,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tendrils - Baby Pea, Organic",
        shortDescription:
          "Idiopathic chronic gout, right ankle and foot, with tophus",
        longDescription:
          "Idiopathic chronic gout, right ankle and foot, with tophus (tophi)",
        size_id: 1,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Onions - White",
        shortDescription:
          "Inj/poisn/oth conseq of external causes comp pregnancy",
        longDescription:
          "Injury, poisoning and certain other consequences of external causes complicating pregnancy",
        size_id: 1,
        material_id: 3,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Creme De Banane - Marie",
        shortDescription: "Conduct disorders",
        longDescription: "Conduct disorders",
        size_id: 1,
        material_id: 7,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lettuce - Iceberg",
        shortDescription: "Struck by golf ball, subsequent encounter",
        longDescription: "Struck by golf ball, subsequent encounter",
        size_id: 3,
        material_id: 9,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bread - 10 Grain Parisian",
        shortDescription: "Sprain of right coracohumeral (ligament)",
        longDescription: "Sprain of right coracohumeral (ligament)",
        size_id: 1,
        material_id: 8,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tart - Lemon",
        shortDescription:
          "Athscl autologous vein bypass of the left leg w ulceration",
        longDescription:
          "Atherosclerosis of autologous vein bypass graft(s) of the left leg with ulceration",
        size_id: 2,
        material_id: 2,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Muffin Batt - Carrot Spice",
        shortDescription: "Pervasive developmental disorders",
        longDescription: "Pervasive developmental disorders",
        size_id: 2,
        material_id: 6,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pork - Loin, Bone - In",
        shortDescription: "Sltr-haris Type III physl fx low end l femr, 7thG",
        longDescription:
          "Salter-Harris Type III physeal fracture of lower end of left femur, subsequent encounter for fracture with delayed healing",
        size_id: 2,
        material_id: 8,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samosa - Veg",
        shortDescription: "Nondisp commnt fx shaft of r femr, 7thP",
        longDescription:
          "Nondisplaced comminuted fracture of shaft of right femur, subsequent encounter for closed fracture with malunion",
        size_id: 3,
        material_id: 5,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bagel - Whole White Sesame",
        shortDescription: "Other disorders of continuity of bone, left radius",
        longDescription: "Other disorders of continuity of bone, left radius",
        size_id: 1,
        material_id: 9,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bread - Raisin",
        shortDescription: "Congenital pulmonary valve insufficiency",
        longDescription: "Congenital pulmonary valve insufficiency",
        size_id: 1,
        material_id: 7,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jolt Cola - Red Eye",
        shortDescription:
          "Unsp inj extn musc/fasc/tend at forarm lv, left arm, subs",
        longDescription:
          "Unspecified injury of other extensor muscle, fascia and tendon at forearm level, left arm, subsequent encounter",
        size_id: 1,
        material_id: 8,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Beef - Texas Style Burger",
        shortDescription:
          "Laceration of blood vessels at ank/ft level, unsp leg",
        longDescription:
          "Laceration of other blood vessels at ankle and foot level, unspecified leg",
        size_id: 2,
        material_id: 6,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cinnamon Buns Sticky",
        shortDescription: "Strain of musc/fasc/tend at shldr/up arm, left arm",
        longDescription:
          "Strain of other muscles, fascia and tendons at shoulder and upper arm level, left arm",
        size_id: 3,
        material_id: 7,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pie Shell - 5",
        shortDescription:
          "Other anterior subluxation of right hip, subs encntr",
        longDescription:
          "Other anterior subluxation of right hip, subsequent encounter",
        size_id: 2,
        material_id: 8,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chilli Paste, Sambal Oelek",
        shortDescription:
          "Encntr for exam for nrml cmprsn and ctrl in clncl rsrch prog",
        longDescription:
          "Encounter for examination for normal comparison and control in clinical research program",
        size_id: 1,
        material_id: 6,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Compound - Pear",
        shortDescription:
          "Underdosing of antihyperlip and antiarterio drugs, init",
        longDescription:
          "Underdosing of antihyperlipidemic and antiarteriosclerotic drugs, initial encounter",
        size_id: 1,
        material_id: 5,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Cucumber - English",
        shortDescription: "Sltr-haris Type IV physl fx low end l tibia, 7thD",
        longDescription:
          "Salter-Harris Type IV physeal fracture of lower end of left tibia, subsequent encounter for fracture with routine healing",
        size_id: 3,
        material_id: 9,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Puree - Kiwi",
        shortDescription: "Deficiency of other nutrient elements",
        longDescription: "Deficiency of other nutrient elements",
        size_id: 3,
        material_id: 8,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wine - Champagne Brut Veuve",
        shortDescription: "Eosinophilic cellulitis [Wells]",
        longDescription: "Eosinophilic cellulitis [Wells]",
        size_id: 1,
        material_id: 4,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Chicken - Soup Base",
        shortDescription:
          "Underdosing of glucocorticoids and synthetic analogues, init",
        longDescription:
          "Underdosing of glucocorticoids and synthetic analogues, initial encounter",
        size_id: 1,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tortillas - Flour, 10",
        shortDescription:
          "Subacute osteomyelitis, unspecified tibia and fibula",
        longDescription: "Subacute osteomyelitis, unspecified tibia and fibula",
        size_id: 2,
        material_id: 3,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Pork - Back Ribs",
        shortDescription: "Sporotrichosis, unspecified",
        longDescription: "Sporotrichosis, unspecified",
        size_id: 1,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bread - Roll, Calabrese",
        shortDescription:
          "Sltr-haris Type III physl fx low end ulna, l arm, 7thG",
        longDescription:
          "Salter-Harris Type III physeal fracture of lower end of ulna, left arm, subsequent encounter for fracture with delayed healing",
        size_id: 1,
        material_id: 8,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Wine - Jafflin Bourgongone",
        shortDescription:
          "Driver of hv veh injured in collision w oth mv in traf, subs",
        longDescription:
          "Driver of heavy transport vehicle injured in collision with other motor vehicles in traffic accident, subsequent encounter",
        size_id: 3,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lemonade - Mandarin, 591 Ml",
        shortDescription:
          "Unsp opn wnd abd wall, r upper q w/o penet perit cav, init",
        longDescription:
          "Unspecified open wound of abdominal wall, right upper quadrant without penetration into peritoneal cavity, initial encounter",
        size_id: 3,
        material_id: 7,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Appetizer - Escargot Puff",
        shortDescription:
          "Adverse effect of other parasympathomimetics, subs encntr",
        longDescription:
          "Adverse effect of other parasympathomimetics [cholinergics], subsequent encounter",
        size_id: 2,
        material_id: 7,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Carbonated Water - Peach",
        shortDescription:
          "Unspecified superficial injury of left wrist, sequela",
        longDescription:
          "Unspecified superficial injury of left wrist, sequela",
        size_id: 2,
        material_id: 4,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Tomatoes - Grape",
        shortDescription:
          "Dvtrcli of both small and lg int w perforation and abscess",
        longDescription:
          "Diverticulitis of both small and large intestine with perforation and abscess",
        size_id: 3,
        material_id: 5,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "V8 - Vegetable Cocktail",
        shortDescription:
          "Fx unsp phalanx of l rng fngr, subs for fx w delay heal",
        longDescription:
          "Fracture of unspecified phalanx of left ring finger, subsequent encounter for fracture with delayed healing",
        size_id: 1,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "7up Diet, 355 Ml",
        shortDescription:
          "Athscl autologous artery CABG w unstable angina pectoris",
        longDescription:
          "Atherosclerosis of autologous artery coronary artery bypass graft(s) with unstable angina pectoris",
        size_id: 2,
        material_id: 3,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Boogies",
        shortDescription:
          "Subluxation of T9/T10 thoracic vertebra, initial encounter",
        longDescription:
          "Subluxation of T9/T10 thoracic vertebra, initial encounter",
        size_id: 1,
        material_id: 1,
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
