// Show Synesthesia variables in the controller view. Add this to your existing script.

function updateSynVarIndicators() {
  const synVars = [
    ['ToggleOnBeat', syn_ToggleOnBeat],
    ['MidPresence', syn_MidPresence],
    ['RandomOnBeat', syn_RandomOnBeat],
    ['MidHits', syn_MidHits],
    ['MidHighTime', syn_MidHighTime],
    ['MidHighLevel', syn_MidHighLevel],
    ['MidHighHits', syn_MidHighHits],
    ['Level', syn_Level],
    ['Hits', syn_Hits],
    ['PrimeBang', syn_PrimeBang],
    ['MidLevel', syn_MidLevel],
    ['Intensity', syn_Intensity],
    ['OnBeat', syn_OnBeat],
    ['HighTime', syn_HighTime],
    ['HighPresence', syn_HighPresence],
    ['BPMTwitcher', syn_BPMTwitcher],
    ['HighLevel', syn_HighLevel],
    ['HighHits', syn_HighHits],
    ['CurvedTime', syn_CurvedTime],
    ['MidHighPresence', syn_MidHighPresence],
    ['BPMSin4', syn_BPMSin4],
    ['BassHits', syn_BassHits],
    ['BassExpoCurve', syn_BassExpoCurve],
    ['BassPresence', syn_BassPresence],
    ['RawLevel', syn_RawLevel],
    ['BPMTri2', syn_BPMTri2],
    ['Time', syn_Time],
    ['BPMConfidence', syn_BPMConfidence],
    ['BPMTri', syn_BPMTri],
    ['FadeInOut', syn_FadeInOut],
    ['BassLevel', syn_BassLevel],
    ['BassTime', syn_BassTime],
    ['BPMSin2', syn_BPMSin2],
    ['Presence', syn_Presence],
    ['MidTime', syn_MidTime],
    ['BPM', syn_BPM],
    ['BPMSin', syn_BPMSin],
    ['BeatTime', syn_BeatTime],
  ]
  for (var i = 0; i < synVars.length; i++) {
    setControl(synVars[i][0], synVars[i][1])
  }
}

function update(dt) {
  updateSynVarIndicators()
}
