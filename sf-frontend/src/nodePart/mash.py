from pydub import AudioSegment
import wave
import sys


def mixNewSong(instrumental, firstV, secondV, vox, drop, chorus):

    instrumentalWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + instrumental + ".wav")
    firstVWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + firstV + ".wav")
    secondVWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + secondV + ".wav")
    voxWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + vox + ".wav")
    dropWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + drop + ".wav")
    chorusWav = AudioSegment.from_file(
        "../../../sf-backend/songs/" + chorus + ".wav")
    combined = dropWav.overlay(firstVWav).overlay(
        secondVWav).overlay(voxWav).overlay(instrumentalWav).overlay(chorusWav)
    combined.export("titleOf7.wav", format='wav')


# mixNewSong(sys.argv[1], sys.argv[2], sys.argv[3],
#            sys.argv[4], sys.argv[5], sys.argv[6])
mixNewSong("instrumental2", "firstV2", "secondV2", "vox2", "drop2", "chorus2")
