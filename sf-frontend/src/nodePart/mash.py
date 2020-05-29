from pydub import AudioSegment
import wave
import sys


def mixNewSong(instrumental, firstV, secondV, vox, drop, chorus, name):

    instrumentalWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + instrumental + "_1.wav")
    firstVWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + firstV + "_1.wav")
    secondVWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + secondV + "_1.wav")
    voxWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + vox + "_1.wav")
    dropWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + drop + "_1.wav")
    chorusWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + chorus + "_1.wav")
    combined = dropWav.overlay(firstVWav).overlay(
        secondVWav).overlay(voxWav).overlay(instrumentalWav).overlay(chorusWav)
    combined.export(name + ".wav", format='wav')


mixNewSong(sys.argv[1], sys.argv[2], sys.argv[3],
           sys.argv[4], sys.argv[5], sys.argv[6], sys.argv[7])
# mixNewSong("instrumental3", "firstV2", "secondV2",
#            "vox3", "drop1", "chorus1", "titleOf20")
