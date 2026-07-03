# Hope//Punk Roll20 Gear Import Notes v0.2

This gear pass adds the mechanical base item mapping for Background gear.

Important distinction:
- `hopepunk_pregens_v0_2.json` is the canonical source.
- `hopepunk_pregen_gear_mapping_v0_2.csv` is the human-audit file.
- `hopepunk_roll20_gear_slot_manifest_v0_2.json` is a slot-shaped manifest for a Roll20 builder script.

The public Hope//Punk sheet is visible in Roll20 and the GitHub source has weapon, armour, cyberware, consumable, and drone/vehicle sections. This package uses stable semantic field names such as `weapon_1_name`, `weapon_1_damage`, `armour_1_defence`, and `cyberware_1_strain` as an intermediate manifest. Before generating final ChatSetAttr/API commands, verify the exact current sheet attribute names from the live `HopePunk.html` source or from a test character export.

Mapping policy:
- Exact Background gear item names use the matching Background Gear stat block.
- Flavoured variants use the closest Civilian Gear base item. Example: “Switchblade tucked in your boot” → Switchblade.
- Pure story props remain inventory notes. Example: “Cigarette case filled with encrypted data chips”.
- Ambiguous props are deliberately conservative: do not invent bonuses unless the Civilian Gear table already gives one.

Known follow-up:
1. Verify exact Roll20 gear attribute names.
2. Generate final ChatSetAttr blocks or a custom Roll20 API importer.
3. Decide whether multiple armour pieces should all be active or whether one should be marked as accessory/flavour only.
4. Decide if gear with active flat bonuses should also create Active Gear Bonus rows.
