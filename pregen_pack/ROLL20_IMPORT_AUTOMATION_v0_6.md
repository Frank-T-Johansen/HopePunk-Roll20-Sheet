# Hope//Punk Roll20 Import Automation v0.6

## What changed in v0.6

- Sets the Roll20 sheet `movement_speed` attribute for all 20 premade Background pregens.
- Base Move is `20`.
- Armour with `HEAVY` sets Move to `15`.
- Armour with `LIGHT` sets Move to `25`.
- If both Light and Heavy are present, Heavy wins.
- Handouts are now optional. `--import` and `--overwrite` affect character sheets only.

## Full import / overwrite

Use only one active full importer script at a time. Remove or blank older `untitled.js` importer tabs first.

1. Open the Roll20 game using the Hope//Punk sheet.
2. Go to Settings -> Mod Scripts / API Scripts.
3. Create or replace one script with `hopepunk_roll20_pregen_importer_v0_6.js`.
4. Save and restart the API sandbox if Roll20 offers the button.
5. In chat, run:

```text
!hopepunk-pregens --dry-run
```

Then either:

```text
!hopepunk-pregens --import
```

or, for an already-imported test/source game:

```text
!hopepunk-pregens --overwrite
```

## Patch only existing characters

If your v0.5 characters already look good and you only need Move filled in:

1. Add `hopepunk_roll20_movement_patch_v0_6.js` as the only active patch script.
2. Save.
3. Run:

```text
!hopepunk-pregens-movement-patch
```

## Optional handouts

Pregens no longer create handouts by default. To create/update optional pregen handouts, run:

```text
!hopepunk-pregens --handouts
```

## Expected movement values

See `hopepunk_movement_patch_v0_6.md` for the full audit table.
