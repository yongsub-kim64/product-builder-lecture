---
title: "Log — Validating the music-generation-ai Pipeline with 27 Forest Clips"
date: 2026-06-12
excerpt: "Extended the photo-based AI music video pipeline to handle video input. Used 27 short forest walk clips as source material to produce 'Forest Dialogue' in both a real-footage version and a pastel watercolor version, confirming that the existing scenes.json structure and whisper alignment flow remain valid for video input."
tags: ["music-generation-ai", "AIMusicVideo", "pipeline", "whisper", "FLUX", "scenes.json", "watercolorVersion", "operationLog"]
published: true
showInLog: true
project_tag: "music-generation-ai"
---

## Summary

The photo-based AI music video production pipeline was extended and validated for video input. Using 27 short clips filmed during a forest walk, a new track titled "Forest Dialogue" was produced. Two versions of the same song were created: a real-footage version and a pastel watercolor version. The goal was not to build a separate pipeline but to verify whether the existing structure could absorb video input.

This record focuses not on the finished outputs but on the operational judgment behind how the music-generation-ai pipeline expanded.

## 1. Starting Point: Extending from Photo-Based to Video-Based Production

The established workflow was photo-centric — using walk photos as source material to generate AI music and music videos. This session replaced photos with 27 short video clips filmed during a forest walk.

The core question was straightforward: does video input require a separate pipeline, or can the existing one absorb it?

The answer was absorption. Rather than adding new structural components, the operating decision was to validate extensibility within the current structure first.

## 2. Handling Mixed Portrait and Landscape Clips

The source material included a mix of portrait and landscape orientation clips. High-resolution portrait footage could be cropped within a landscape frame to extract usable segments.

From an operational standpoint, orientation matters less than clip length, camera stability, resolution, and tonal fit with the track. Stability is the primary selection criterion, not format.

This session surfaced a need for a filming SOP: "For any scene worth keeping, stop and record at least 5 seconds."

## 3. Confirming the scenes.json Scene-Reuse Structure

The `video` / `video_start` fields in `scenes.json` functioned as expected with video input. The same source clip can be reused across multiple scenes by specifying different start timestamps.

Beyond a simple editing file, this structure has potential as operational metadata that tracks the production history of each track. It needs to be connected to a future `songs/` per-track folder structure and manifest system.

## 4. What whisper 39/39 Alignment Means

All 39 lyric lines were aligned successfully via whisper. The significance is not the count itself but what it indicates: the lyric structure, audio processing, and subtitle alignment flow are stabilizing across repeated sessions.

That said, high alignment rates are not a reason to skip review. The current standard remains: automatic alignment followed by manual verification.

## 5. Revalidating the FLUX Watercolor Generation Path

A pastel watercolor version was produced alongside the real-footage version. For a quiet walking meditation track, the consistent tone of the watercolor version proved a better tonal match than the documentary energy of the real footage.

The FLUX-based watercolor path worked well for visual coherence, but some generated images contained artifacts — fake-signature-like marks or stray scribbles embedded in the frame. This is not a new finding; it was reconfirmed in this session.

Operational conclusion: a successful generation run is not the same as a review-ready image. A full visual inspection before publication is non-negotiable. An image review checklist should be formalized as a separate operational document.

## 6. Operational Comparison: Real-Footage vs. Watercolor Versions

The two versions are not simply style variations — they carry different content hypotheses and different audience expectations.

- **Real-footage version**: Strong in presence and immediacy. Better suited for energetic tracks, travel documentation, or location-dependent content.
- **Watercolor version**: Consistent visual tone, well-matched to meditative or emotionally quiet tracks.

Because both versions use the same track, post-upload metrics — views, click-through rate, average watch duration, drop-off points — can serve as a direct A/B comparison.

## 7. Forest Clip Encoding Size and Upload Compression

Forest footage is visually dense — leaves, light variation, shadows — resulting in larger encoded file sizes. This session confirmed the need for a production workflow that generates both a final archive file and a separately compressed upload copy.

File classification:

- **Raw source**: Archive only, unedited
- **Intermediate files**: Working files generated during editing
- **Final cut**: Completed file, for archival
- **Upload copy**: Platform-optimized compressed version

As the track catalog grows, this distinction needs to be explicitly reflected in the `songs/` folder structure.

## 8. Pipeline Evolution Confirmed in This Session

Summary of what was validated:

- music-generation-ai can handle video input, not only photo input.
- Mixed portrait/landscape clips can be processed with the existing pipeline using stability and resolution as selection criteria.
- The `video` / `video_start` structure in `scenes.json` is valid for scene reuse and production history tracking.
- whisper 39/39 alignment indicates the subtitle workflow is stabilizing.
- The FLUX watercolor path is effective for meditation and ambient tracks, but full image review before publication is a prerequisite.
- Real-footage and watercolor versions can be operated as A/B response test pairs.
- High-density footage such as forest clips requires explicit encoding size management and upload compression standards.

## 9. Operational Judgment

This session is not a standalone production case. It represents a validation checkpoint in the transition of music-generation-ai from a single-use tool to a repeatable production pipeline.

Pipeline readiness is not measured by the visual quality of the final output. The measure is whether input sourcing, scene metadata, lyric alignment, image generation, final encoding, and platform response tracking can be operated as a single production-and-validation loop.

Each stage was confirmed as functional in this session. However, the structure connecting them — per-track folders, manifests, review checklists — remains unformalized. The next priority is not adding more tracks, but first establishing the `songs/` folder structure and per-track metric manifest.

## 10. Next Actions

- [ ] Upload "Forest Dialogue" real-footage version
- [ ] Upload "Forest Dialogue" watercolor version
- [ ] Record title, description, and thumbnail differences between the two versions
- [ ] Collect 48-hour metrics after publication (views, CTR, average watch duration, drop-off segments)
- [ ] Design `songs/` per-track folder structure
- [ ] Define storage locations for source clips, audio, lyrics, scenes.json, subtitles, final cut, and upload copy
- [ ] Create per-track manifest template
- [ ] Draft AI image review checklist
- [ ] Draft forest clip filming SOP
- [ ] Extract Insight candidates from this Log
- [ ] Evaluate "Photo-Based vs. Video-Based AI Music Video Production" as a Guide candidate

---

Related Log: [From a Morning Ad to a First Song — 2-Hour Rocket Jump with Meta-Chulbuji](/log/ai-music-rocket-jump/)  
Related Insight: [Role Clarity is What Makes AI Collaboration Work](/insight/insight-003/)  
Related Insight: [It's Not About Hiding the Channel — It's About Separating Roles](/insight/insight-036/)  
→ [June 2026 Operating Board](/board/2026-06/)
